const { element } = require("../test/mock/ElementFinder");

/**
 * Create an Element class that represents an element of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 * 
 * 
 * Use Protractor API to retrieve element
 * @see {@link https://www.protractortest.org/#/api?view=ElementFinder}
 */
module.exports = class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;

        this.parent = null;
        this.children = {};

    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name + " is already added!");
        }
        this.children[child.name] = child;

        child.setParent(this);

    }

    /* has a method to retrieve the protractor element
        by the locator (.get([name])) in it's context
       if it gets a name as parameter, it tries to find
       in it's children (recursively) the Element with
           the given name or throws an Erorr if it cannot
           find the element 
           
           element(locator) {
        return ElementFinder.element(locator);*/

    get(name) {

        if (!name) {
            return element(this.locator)
        } 
        if (this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        }
        

        let nested = Object.values(this.children)
        if(nested) {
        return nested.find(element => element.get(name)).get(name);
        
         };
        
        throw new Error(`${name} "Cannot find the element!`);

    }
        
            
    

    



    }









