# SillyTavern-ChatRenamer
A simple extension for SillyTavern to rename new chats as '{char} - {model} - {yyyy-mm-dd-hhmmss}', written by Gemma4.

I often test different local models for Roleplay and it was getting annoying keeping track at a glance of which model was which chat.
This simple extension hooks the CHAT_CREATED event and runs /rename grabbing the model name from the {{model}} macro and sanitising it.
I use hugging face repo style names in my llama.cpp router config, e.g. ReadyArt/Serenity-12B so it's mainly stripping the 'org' and slash.

And thrown on github so I can easily pull it into my SillyTavern instances.

No warranty, your experiences may vary, if symptoms persist more than eight hours see a medium. Not recommended for anyone...
