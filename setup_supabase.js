const { Client } = require('pg');

// URI encoded password to handle special characters like '?'
const connectionString = 'postgresql://postgres:w%3Fd5NvW_Lwn6CLr@db.muqievfhkfrxxxmjeyfv.supabase.co:5432/postgres';

async function run() {
    const client = new Client({ connectionString });
    try {
        console.log("Connecting to PostgreSQL...");
        await client.connect();
        console.log("Connected successfully!");

        // Query the decrypted_secrets table to find the anon key
        console.log("Retrieving API keys from vault...");
        const secretRes = await client.query('SELECT name, secret FROM vault.decrypted_secrets WHERE name IN (\'anon_key\', \'service_role_key\')');
        
        let anonKey = null;
        secretRes.rows.forEach(row => {
            console.log(`Found key: ${row.name}`);
            if (row.name === 'anon_key') {
                anonKey = row.secret;
            }
        });

        if (!anonKey) {
            console.log("Could not find anon_key in decrypted_secrets. Trying backup query...");
            // Alternative query for older versions or custom setups
            const backupRes = await client.query('SELECT name, decrypted_secret FROM vault.decrypted_secrets');
            backupRes.rows.forEach(row => {
                if (row.name && row.name.includes('anon')) {
                    anonKey = row.decrypted_secret;
                }
            });
        }

        console.log(`Anon Key Retrieved: ${anonKey ? anonKey.substring(0, 15) + "..." : "NOT FOUND"}`);
        if (anonKey) {
            // Write it to a local file so we can read it in the next step
            fs = require('fs');
            fs.writeFileSync('supabase_keys.json', JSON.stringify({ anonKey, projectId: 'muqievfhkfrxxxmjeyfv' }, null, 2));
            console.log("Keys saved to supabase_keys.json");
        }

        // Create the users table
        console.log("Creating users table if not exists...");
        await client.query(`
            CREATE TABLE IF NOT EXISTS public.users (
                id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                email text UNIQUE NOT NULL,
                password text NOT NULL,
                created_at timestamptz DEFAULT now()
            );
        `);
        console.log("Users table ready!");

        // Create the reminders table referencing public.users
        console.log("Creating reminders table if not exists...");
        await client.query(`
            CREATE TABLE IF NOT EXISTS public.reminders (
                id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
                name text NOT NULL,
                time text,
                icon text,
                category text,
                created_at timestamptz DEFAULT now()
            );
        `);
        console.log("Reminders table ready!");

        // Disable RLS to allow direct client CRUD without complex JWT context
        console.log("Disabling RLS on tables...");
        await client.query('ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;');
        await client.query('ALTER TABLE public.reminders DISABLE ROW LEVEL SECURITY;');
        console.log("RLS disabled successfully!");

        console.log("✨ Supabase Setup Complete!");
    } catch (err) {
        console.error("❌ Setup error:", err);
    } finally {
        await client.end();
    }
}

run();
