/** @type {typeof import("it.unimi.dsi.fastutil.objects.ObjectArrayList").$ObjectArrayList } */
let $ObjectArrayList  = Java.loadClass("it.unimi.dsi.fastutil.objects.ObjectArrayList")
ServerEvents.tags('block', event => {
    var map = {};
    filter_tags(event, map, "chipped", chipped_mapper);
    filter_tags(event, map, "rechiseled", noop_mapper);
    for (var key in map) {
        /*var original_tags = Ingredient.of(key).getItemTypes().stream().flatMap(item => item.getTags().stream()).filter(tag => tag.getNamespace().equals("minecraft") || tag.getNamespace().equals("c")).toList();
        for (var tag of original_tags) {
            event.add(tag, map[key]);
        }*/
       event.add("domum_ornamentum:default", map[key]);
    }
});

function noop_mapper(tag_id) {
    return tag_id;
}

function chipped_mapper(tag_id) {
    if (tag_id.endsWith("borderless_bricks")) {
        return "bricks";
    } else if (tag_id.endsWith("exposed_copper_block")) {
        return tag_id.replace("copper_block", "copper");
    } else if (tag_id.startsWith("special_")) {
        return tag_id.substring(8);
    }
    return tag_id;
}

function filter_tags(event, map, mod_id, mapper) {
    var tags = Ingredient.of('@' + mod_id).getItemTypes().stream().flatMap(item => item.getTags().stream()).distinct().filter(loc => loc.getNamespace().equals(mod_id)).toList();
    for (var tag of tags) {
        var tag_id = mapper(tag.getPath());
        var items = Ingredient.of('#' + tag).getItemIds().stream().filter(item => !(item.includes("_stairs") || item.includes("_slab"))).toList();
        if (!Item.exists(ID.of("minecraft:" + tag_id, false))) {
            continue;
        }
        if (map[tag_id]) {
            map[tag_id] = $ObjectArrayList.of(map[tag_id], items);
        } else {
            map[tag_id] = items;
        }
    }
}