ServerEvents.recipes(event => {
    event.remove({
        mod: 'magistuarmory',
        output: '#c:ingots/steel'
    });
    event.remove({
        mod: 'magistuarmoryaddon',
        output: '#c:ingots/steel'
    });
    event.remove({
        mod: 'antiquelegacy',
        output: '#c:ingots/steel'
    });
    event.remove({
        mod: 'magistuarmory',
        output: '#c:nuggets/steel'
    });
    event.remove({
        mod: 'magistuarmoryaddon',
        output: '#c:nuggets/steel'
    });
    event.remove({
        mod: 'antiquelegacy',
        output: '#c:nuggets/steel'
    });
});