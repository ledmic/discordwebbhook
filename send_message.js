const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { message } = req.body;
  const webhookUrl = 'https://discord.com/api/webhooks/1114566308269396080/08r14DRN6bcqMwzUc45EbM1Qhhh4nxfXZTE32t6ChuJC8eKximLqR9dHuiHPkoY6vKjo';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Message sent successfully.' });
    } else {
      res.status(response.status).json({ message: 'Failed to send message.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
