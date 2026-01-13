import express from 'express';
import { Client, GatewayIntentBits } from 'discord.js';

const app = express();
app.use(express.json());

const client = new Client({
  intents: [GatewayIntentBits.DirectMessages],
  partials: ['CHANNEL']
});

const TOKEN = process.env.BOT_TOKEN; // من Render Environment

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

// endpoint يستقبله موقعك
app.post('/send', async (req, res) => {
  try {
    const { discord_id, message } = req.body;
    if (!discord_id || !message) {
      return res.status(400).send('Missing data');
    }

    const user = await client.users.fetch(discord_id);
    await user.send(message);

    res.json({ status: 'sent' });
  } catch (e) {
    console.error(e);
    res.status(500).send('failed');
  }
});

client.login(TOKEN);

// Render يحتاج بورت
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('HTTP server running'));
