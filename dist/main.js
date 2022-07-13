(()=>{"use strict";var t,e,n={342:(t,e)=>{e.__esModule=!0,e.Grid=void 0;var n=function(){function t(){this.defaultTiles=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0],this.tiles=Array.from(this.defaultTiles),this.locationElements=[document.getElementById("loc-0"),document.getElementById("loc-1"),document.getElementById("loc-2"),document.getElementById("loc-3"),document.getElementById("loc-4"),document.getElementById("loc-5"),document.getElementById("loc-6"),document.getElementById("loc-7"),document.getElementById("loc-8"),document.getElementById("loc-9"),document.getElementById("loc-10"),document.getElementById("loc-11"),document.getElementById("loc-12"),document.getElementById("loc-13"),document.getElementById("loc-14"),document.getElementById("loc-15")],this.updateAllGridElements()}return t.prototype.isGridComplete=function(){return this.tiles===this.defaultTiles},t.prototype.setGrid=function(t){this.tiles=Array.from(t.tiles)},t.prototype.getTileAtLocation=function(t){return this.tiles[t.getIndex()]},t.prototype.reset=function(){this.tiles=Array.from(this.defaultTiles),this.updateAllGridElements()},t.prototype.shuffle=function(){this.updateAllGridElements()},t.prototype.updateAllGridElements=function(){for(var t=0;t<this.tiles.length;++t)this.updateGridElementAtIndex(t)},t.prototype.updateGridElementAtIndex=function(t){var e=this.tiles[t],n=0==e?"*":e.toString();this.locationElements[t].innerHTML=n},t.prototype.swap=function(t,e){var n,o=t.getIndex(),i=e.getIndex();n=[this.tiles[i],this.tiles[o]],this.tiles[o]=n[0],this.tiles[i]=n[1],this.updateGridElementAtIndex(o),this.updateGridElementAtIndex(i)},t}();e.Grid=n},707:(t,e)=>{e.__esModule=!0,e.Location=void 0;var n=function(){function t(t,e){this.row=t,this.col=e}return t.prototype.getRow=function(){return this.row},t.prototype.getCol=function(){return this.col},t.prototype.getIndex=function(){return 4*this.row+this.col},t.prototype.isValid=function(){return 0<=this.row&&this.row<4&&0<=this.col&&this.col<4},t.prototype.getLocationInDirection=function(e){return new t(this.row+[1,0,-1,0][e],this.col+[0,-1,0,1][e])},t}();e.Location=n}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var l=o[t]={exports:{}};return n[t](l,l.exports,i),l.exports}t=i(342),e=i(707),new(function(){function n(){this.grid=new t.Grid,this.emptyLocation=new e.Location(3,3),this.initializeAllButtons(),this.puzzleStatusElement=document.getElementById("puzzle-status")}return n.prototype.updatePuzzleStatusElement=function(){this.grid.isGridComplete()?this.puzzleStatusElement.innerHTML="Completed":this.puzzleStatusElement.innerHTML="Not Completed"},n.prototype.initializeAllButtons=function(){this.initializePuzzleMenuButtons(),this.initializeDirectionMenuButtons()},n.prototype.initializePuzzleMenuButtons=function(){var t=this;document.getElementById("shuffle-button").onclick=function(){t.grid.shuffle(),t.updatePuzzleStatusElement()},document.getElementById("reset-button").onclick=function(){t.grid.reset(),t.updatePuzzleStatusElement()}},n.prototype.initializeDirectionMenuButtons=function(){for(var t=this,e=[document.getElementById("up-button"),document.getElementById("right-button"),document.getElementById("down-button"),document.getElementById("left-button")],n=function(n){e[n].onclick=function(){t.movePuzzle(n),t.updatePuzzleStatusElement()}},o=0;o<e.length;++o)n(o)},n.prototype.movePuzzle=function(t){var e=this.emptyLocation.getLocationInDirection(t);e.isValid()&&(this.grid.swap(this.emptyLocation,e),Object.assign(this.emptyLocation,e))},n}())})();