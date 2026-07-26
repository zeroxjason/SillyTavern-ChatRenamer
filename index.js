jQuery(() => {
    // Set to true if you want debug messages in the console (F12)
    const DEBUG = false;

    const context = SillyTavern.getContext();

    context.eventSource.on(context.eventTypes.CHAT_CREATED, async () => {
        setTimeout(async () => {
            // Retrieve model name using ST's internal macro evaluator
            let rawModel = 'unknown-model';

            if (typeof substituteParams === 'function') {
                rawModel = substituteParams('{{model}}');
            } else if (typeof context.substituteParams === 'function') {
                rawModel = context.substituteParams('{{model}}');
            }

            if (DEBUG) console.log('[Model Chat Namer] Raw macro output:', rawModel);

            // Keep only the model name after the last slash (e.g. "TheDrummer/Artemis-31B-v1n" -> "Artemis-31B-v1n")
            if (rawModel && rawModel.includes('/')) {
                rawModel = rawModel.split('/').pop();
            }

            // Fallback and OS filename character sanitization
            const safeModel = (rawModel || 'unknown-model')
                .replace(/[\/\\?%*:|"<>]/g, '-')
                .trim();

            if (DEBUG) console.log('[Model Chat Namer] Renaming chat with model:', safeModel);

            await context.executeSlashCommands(`/renamechat {{char}} - ${safeModel} - {{datetimeformat::YYYY-MM-DD-HH:mm:ss}}`);
        }, 500);
    });
});
