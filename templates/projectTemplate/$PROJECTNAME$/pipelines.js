"use strict";

// Define your item pipelines here

// Don't forget to add your pipeline to the ITEM_PIPELINES setting
// See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

module.exports = class $PROJECTNAMECAP$Pipeline {

    processItem(self, item, spider) {
        return item;
    }
}