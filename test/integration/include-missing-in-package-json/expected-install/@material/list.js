/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n]};return e(t,n)};function t(t,n){e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}var n=function(){n=Object.assign||function e(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s))t[s]=n[s]}return t};return n.apply(this,arguments)};function i(e,t){var n=typeof Symbol==="function"&&e[Symbol.iterator];if(!n)return e;var i=n.call(e),r,s=[],o;try{while((t===void 0||t-- >0)&&!(r=i.next()).done)s.push(r.value)}catch(e){o={error:e}}finally{try{if(r&&!r.done&&(n=i["return"]))n.call(i)}finally{if(o)throw o.error}}return s}function r(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var s=function(){function e(e){if(e===void 0){e={}}this.adapter_=e}Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:true,configurable:true});Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:true,configurable:true});e.prototype.init=function(){};e.prototype.destroy=function(){};return e}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var o=function(){function e(e,t){var n=[];for(var i=2;i<arguments.length;i++){n[i-2]=arguments[i]}this.root_=e;this.initialize.apply(this,r(n));this.foundation_=t===undefined?this.getDefaultFoundation():t;this.foundation_.init();this.initialSyncWithDOM()}e.attachTo=function(t){return new e(t,new s({}))};e.prototype.initialize=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}};e.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};e.prototype.initialSyncWithDOM=function(){};e.prototype.destroy=function(){this.foundation_.destroy()};e.prototype.listen=function(e,t,n){this.root_.addEventListener(e,t,n)};e.prototype.unlisten=function(e,t,n){this.root_.removeEventListener(e,t,n)};e.prototype.emit=function(e,t,n){if(n===void 0){n=false}var i;if(typeof CustomEvent==="function"){i=new CustomEvent(e,{bubbles:n,detail:t})}else{i=document.createEvent("CustomEvent");i.initCustomEvent(e,n,false,t)}this.root_.dispatchEvent(i)};return e}();
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function a(e,t){if(e.closest){return e.closest(t)}var n=e;while(n){if(u(n,t)){return n}n=n.parentElement}return null}function u(e,t){var n=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return n.call(e,t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"};var d={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+c.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+c.LIST_ITEM_CLASS+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+c.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+c.LIST_ITEM_CLASS+" a,\n    ."+c.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+c.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'};var l={UNSET_INDEX:-1};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=["input","button","textarea","select"];function _(e){return e instanceof Array}var h=function(e){t(i,e);function i(t){var r=e.call(this,n({},i.defaultAdapter,t))||this;r.wrapFocus_=false;r.isVertical_=true;r.isSingleSelectionList_=false;r.selectedIndex_=l.UNSET_INDEX;r.focusedItemIndex_=l.UNSET_INDEX;r.useActivatedClass_=false;r.ariaCurrentAttrValue_=null;r.isCheckboxList_=false;r.isRadioList_=false;return r}Object.defineProperty(i,"strings",{get:function(){return d},enumerable:true,configurable:true});Object.defineProperty(i,"cssClasses",{get:function(){return c},enumerable:true,configurable:true});Object.defineProperty(i,"numbers",{get:function(){return l},enumerable:true,configurable:true});Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){return undefined},focusItemAtIndex:function(){return undefined},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return false},hasRadioAtIndex:function(){return false},isCheckboxCheckedAtIndex:function(){return false},isFocusInsideList:function(){return false},isRootFocused:function(){return false},listItemAtIndexHasClass:function(){return false},notifyAction:function(){return undefined},removeClassForElementIndex:function(){return undefined},setAttributeForElementIndex:function(){return undefined},setCheckedCheckboxOrRadioAtIndex:function(){return undefined},setTabIndexForListItemChildren:function(){return undefined}}},enumerable:true,configurable:true});i.prototype.layout=function(){if(this.adapter_.getListItemCount()===0){return}if(this.adapter_.hasCheckboxAtIndex(0)){this.isCheckboxList_=true}else if(this.adapter_.hasRadioAtIndex(0)){this.isRadioList_=true}};i.prototype.setWrapFocus=function(e){this.wrapFocus_=e};i.prototype.setVerticalOrientation=function(e){this.isVertical_=e};i.prototype.setSingleSelection=function(e){this.isSingleSelectionList_=e};i.prototype.setUseActivatedClass=function(e){this.useActivatedClass_=e};i.prototype.getSelectedIndex=function(){return this.selectedIndex_};i.prototype.setSelectedIndex=function(e){if(!this.isIndexValid_(e)){return}if(this.isCheckboxList_){this.setCheckboxAtIndex_(e)}else if(this.isRadioList_){this.setRadioAtIndex_(e)}else{this.setSingleSelectionAtIndex_(e)}};i.prototype.handleFocusIn=function(e,t){if(t>=0){this.adapter_.setTabIndexForListItemChildren(t,"0")}};i.prototype.handleFocusOut=function(e,t){var n=this;if(t>=0){this.adapter_.setTabIndexForListItemChildren(t,"-1")}setTimeout((function(){if(!n.adapter_.isFocusInsideList()){n.setTabindexToFirstSelectedItem_()}}),0)};i.prototype.handleKeydown=function(e,t,n){var i=e.key==="ArrowLeft"||e.keyCode===37;var r=e.key==="ArrowUp"||e.keyCode===38;var s=e.key==="ArrowRight"||e.keyCode===39;var o=e.key==="ArrowDown"||e.keyCode===40;var a=e.key==="Home"||e.keyCode===36;var u=e.key==="End"||e.keyCode===35;var c=e.key==="Enter"||e.keyCode===13;var d=e.key==="Space"||e.keyCode===32;if(this.adapter_.isRootFocused()){if(r||u){e.preventDefault();this.focusLastElement()}else if(o||a){e.preventDefault();this.focusFirstElement()}return}var l=this.adapter_.getFocusedElementIndex();if(l===-1){l=n;if(l<0){return}}var f;if(this.isVertical_&&o||!this.isVertical_&&s){this.preventDefaultEvent_(e);f=this.focusNextElement(l)}else if(this.isVertical_&&r||!this.isVertical_&&i){this.preventDefaultEvent_(e);f=this.focusPrevElement(l)}else if(a){this.preventDefaultEvent_(e);f=this.focusFirstElement()}else if(u){this.preventDefaultEvent_(e);f=this.focusLastElement()}else if(c||d){if(t){var _=e.target;if(_&&_.tagName==="A"&&c){return}this.preventDefaultEvent_(e);if(this.isSelectableList_()){this.setSelectedIndexOnAction_(l)}this.adapter_.notifyAction(l)}}this.focusedItemIndex_=l;if(f!==undefined){this.setTabindexAtIndex_(f);this.focusedItemIndex_=f}};i.prototype.handleClick=function(e,t){if(e===l.UNSET_INDEX){return}if(this.isSelectableList_()){this.setSelectedIndexOnAction_(e,t)}this.adapter_.notifyAction(e);this.setTabindexAtIndex_(e);this.focusedItemIndex_=e};i.prototype.focusNextElement=function(e){var t=this.adapter_.getListItemCount();var n=e+1;if(n>=t){if(this.wrapFocus_){n=0}else{return e}}this.adapter_.focusItemAtIndex(n);return n};i.prototype.focusPrevElement=function(e){var t=e-1;if(t<0){if(this.wrapFocus_){t=this.adapter_.getListItemCount()-1}else{return e}}this.adapter_.focusItemAtIndex(t);return t};i.prototype.focusFirstElement=function(){this.adapter_.focusItemAtIndex(0);return 0};i.prototype.focusLastElement=function(){var e=this.adapter_.getListItemCount()-1;this.adapter_.focusItemAtIndex(e);return e};i.prototype.setEnabled=function(e,t){if(!this.isIndexValid_(e)){return}if(t){this.adapter_.removeClassForElementIndex(e,c.LIST_ITEM_DISABLED_CLASS);this.adapter_.setAttributeForElementIndex(e,d.ARIA_DISABLED,"false")}else{this.adapter_.addClassForElementIndex(e,c.LIST_ITEM_DISABLED_CLASS);this.adapter_.setAttributeForElementIndex(e,d.ARIA_DISABLED,"true")}};i.prototype.preventDefaultEvent_=function(e){var t=e.target;var n=(""+t.tagName).toLowerCase();if(f.indexOf(n)===-1){e.preventDefault()}};i.prototype.setSingleSelectionAtIndex_=function(e){if(this.selectedIndex_===e){return}var t=c.LIST_ITEM_SELECTED_CLASS;if(this.useActivatedClass_){t=c.LIST_ITEM_ACTIVATED_CLASS}if(this.selectedIndex_!==l.UNSET_INDEX){this.adapter_.removeClassForElementIndex(this.selectedIndex_,t)}this.adapter_.addClassForElementIndex(e,t);this.setAriaForSingleSelectionAtIndex_(e);this.selectedIndex_=e};i.prototype.setAriaForSingleSelectionAtIndex_=function(e){if(this.selectedIndex_===l.UNSET_INDEX){this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(e,d.ARIA_CURRENT)}var t=this.ariaCurrentAttrValue_!==null;var n=t?d.ARIA_CURRENT:d.ARIA_SELECTED;if(this.selectedIndex_!==l.UNSET_INDEX){this.adapter_.setAttributeForElementIndex(this.selectedIndex_,n,"false")}var i=t?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(e,n,i)};i.prototype.setRadioAtIndex_=function(e){this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,true);if(this.selectedIndex_!==l.UNSET_INDEX){this.adapter_.setAttributeForElementIndex(this.selectedIndex_,d.ARIA_CHECKED,"false")}this.adapter_.setAttributeForElementIndex(e,d.ARIA_CHECKED,"true");this.selectedIndex_=e};i.prototype.setCheckboxAtIndex_=function(e){for(var t=0;t<this.adapter_.getListItemCount();t++){var n=false;if(e.indexOf(t)>=0){n=true}this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,n);this.adapter_.setAttributeForElementIndex(t,d.ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=e};i.prototype.setTabindexAtIndex_=function(e){if(this.focusedItemIndex_===l.UNSET_INDEX&&e!==0){this.adapter_.setAttributeForElementIndex(0,"tabindex","-1")}else if(this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e){this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1")}this.adapter_.setAttributeForElementIndex(e,"tabindex","0")};i.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_};i.prototype.setTabindexToFirstSelectedItem_=function(){var e=0;if(this.isSelectableList_()){if(typeof this.selectedIndex_==="number"&&this.selectedIndex_!==l.UNSET_INDEX){e=this.selectedIndex_}else if(_(this.selectedIndex_)&&this.selectedIndex_.length>0){e=this.selectedIndex_.reduce((function(e,t){return Math.min(e,t)}))}}this.setTabindexAtIndex_(e)};i.prototype.isIndexValid_=function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList_){throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list")}if(e.length===0){return true}else{return e.some((function(e){return t.isIndexInRange_(e)}))}}else if(typeof e==="number"){if(this.isCheckboxList_){throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e)}return this.isIndexInRange_(e)}else{return false}};i.prototype.isIndexInRange_=function(e){var t=this.adapter_.getListItemCount();return e>=0&&e<t};i.prototype.setSelectedIndexOnAction_=function(e,t){if(t===void 0){t=true}if(this.adapter_.listItemAtIndexHasClass(e,c.LIST_ITEM_DISABLED_CLASS)){return}if(this.isCheckboxList_){this.toggleCheckboxAtIndex_(e,t)}else{this.setSelectedIndex(e)}};i.prototype.toggleCheckboxAtIndex_=function(e,t){var n=this.adapter_.isCheckboxCheckedAtIndex(e);if(t){n=!n;this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n)}this.adapter_.setAttributeForElementIndex(e,d.ARIA_CHECKED,n?"true":"false");var i=this.selectedIndex_===l.UNSET_INDEX?[]:this.selectedIndex_.slice();if(n){i.push(e)}else{i=i.filter((function(t){return t!==e}))}this.selectedIndex_=i};return i}(s);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var I=function(e){t(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}Object.defineProperty(n.prototype,"vertical",{set:function(e){this.foundation_.setVerticalOrientation(e)},enumerable:true,configurable:true});Object.defineProperty(n.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+c.LIST_ITEM_CLASS))},enumerable:true,configurable:true});Object.defineProperty(n.prototype,"wrapFocus",{set:function(e){this.foundation_.setWrapFocus(e)},enumerable:true,configurable:true});Object.defineProperty(n.prototype,"singleSelection",{set:function(e){this.foundation_.setSingleSelection(e)},enumerable:true,configurable:true});Object.defineProperty(n.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(e){this.foundation_.setSelectedIndex(e)},enumerable:true,configurable:true});n.attachTo=function(e){return new n(e)};n.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this);this.handleKeydown_=this.handleKeydownEvent_.bind(this);this.focusInEventListener_=this.handleFocusInEvent_.bind(this);this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this);this.listen("keydown",this.handleKeydown_);this.listen("click",this.handleClick_);this.listen("focusin",this.focusInEventListener_);this.listen("focusout",this.focusOutEventListener_);this.layout();this.initializeListType()};n.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_);this.unlisten("click",this.handleClick_);this.unlisten("focusin",this.focusInEventListener_);this.unlisten("focusout",this.focusOutEventListener_)};n.prototype.layout=function(){var e=this.root_.getAttribute(d.ARIA_ORIENTATION);this.vertical=e!==d.ARIA_ORIENTATION_HORIZONTAL;[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach((function(e){e.setAttribute("tabindex","-1")}));[].slice.call(this.root_.querySelectorAll(d.FOCUSABLE_CHILD_ELEMENTS)).forEach((function(e){return e.setAttribute("tabindex","-1")}));this.foundation_.layout()};n.prototype.initializeListType=function(){var e=this;var t=this.root_.querySelectorAll(d.ARIA_ROLE_CHECKBOX_SELECTOR);var n=this.root_.querySelector("\n      ."+c.LIST_ITEM_ACTIVATED_CLASS+",\n      ."+c.LIST_ITEM_SELECTED_CLASS+"\n    ");var i=this.root_.querySelector(d.ARIA_CHECKED_RADIO_SELECTOR);if(t.length){var r=this.root_.querySelectorAll(d.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(r,(function(t){return e.listElements.indexOf(t)}))}else if(n){if(n.classList.contains(c.LIST_ITEM_ACTIVATED_CLASS)){this.foundation_.setUseActivatedClass(true)}this.singleSelection=true;this.selectedIndex=this.listElements.indexOf(n)}else if(i){this.selectedIndex=this.listElements.indexOf(i)}};n.prototype.setEnabled=function(e,t){this.foundation_.setEnabled(e,t)};n.prototype.getDefaultFoundation=function(){var e=this;var t={addClassForElementIndex:function(t,n){var i=e.listElements[t];if(i){i.classList.add(n)}},focusItemAtIndex:function(t){var n=e.listElements[t];if(n){n.focus()}},getAttributeForElementIndex:function(t,n){return e.listElements[t].getAttribute(n)},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},getListItemCount:function(){return e.listElements.length},hasCheckboxAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(d.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(d.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){var n=e.listElements[t];var i=n.querySelector(d.CHECKBOX_SELECTOR);return i.checked},isFocusInsideList:function(){return e.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===e.root_},listItemAtIndexHasClass:function(t,n){return e.listElements[t].classList.contains(n)},notifyAction:function(t){e.emit(d.ACTION_EVENT,{index:t},true)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];if(i){i.classList.remove(n)}},setAttributeForElementIndex:function(t,n,i){var r=e.listElements[t];if(r){r.setAttribute(n,i)}},setCheckedCheckboxOrRadioAtIndex:function(t,n){var i=e.listElements[t];var r=i.querySelector(d.CHECKBOX_RADIO_SELECTOR);r.checked=n;var s=document.createEvent("Event");s.initEvent("change",true,true);r.dispatchEvent(s)},setTabIndexForListItemChildren:function(t,n){var i=e.listElements[t];var r=[].slice.call(i.querySelectorAll(d.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));r.forEach((function(e){return e.setAttribute("tabindex",n)}))}};return new h(t)};n.prototype.getListItemIndex_=function(e){var t=e.target;var n=a(t,"."+c.LIST_ITEM_CLASS+", ."+c.ROOT);if(n&&u(n,"."+c.LIST_ITEM_CLASS)){return this.listElements.indexOf(n)}return-1};n.prototype.handleFocusInEvent_=function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusIn(e,t)};n.prototype.handleFocusOutEvent_=function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusOut(e,t)};n.prototype.handleKeydownEvent_=function(e){var t=this.getListItemIndex_(e);var n=e.target;this.foundation_.handleKeydown(e,n.classList.contains(c.LIST_ITEM_CLASS),t)};n.prototype.handleClickEvent_=function(e){var t=this.getListItemIndex_(e);var n=e.target;var i=!u(n,d.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(t,i)};return n}(o);export{I as MDCList,h as MDCListFoundation,c as cssClasses,l as numbers,d as strings};
