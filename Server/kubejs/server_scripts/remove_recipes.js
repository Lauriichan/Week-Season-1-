ServerEvents.recipes(event => {
    event.remove({
        mod: 'magistuarmory',
        output: '#c:ingots/steel'
    });
    event.remove({
        mod: 'magistuarmory',
        output: '#c:nuggets/steel'
    });
});