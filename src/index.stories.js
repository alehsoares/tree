import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import BasicApp from "./basic";
import MetatextApp from "./metatext";
import DeeplyNestedApp from "./deeplyNested";
import OnselectApp from "./onselect";
import LinksApp from "./links";


// A simple tree with several levels that you can expand and collapse.
export const Basic = () => BasicApp;
Basic.storyName = "Basic Tree";

// Metatext adds text below the item label.
export const Metatext = () => MetatextApp;
Metatext.storyName = "Nested Tree With Metatext";

// A tree can have muliple levels of nested branches.
export const DeeplyNested = () => DeeplyNestedApp;
DeeplyNested.storyName = "Deeply Nested Tree";

// Use the onselect event handler to retrieve the selected item in the tree.
export const Onselect = () => OnselectApp;
Onselect.storyName = "Tree With onselect Handler";

// Trees can be used for navigation by providing href attributes with the items.
export const Links = () => LinksApp;
Links.storyName = "Tree With Links";
