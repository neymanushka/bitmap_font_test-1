var Test;
(function (Test) {
    var Launcher = (function () {
        function Launcher() {
            var _this = this;
            this.color = 0X0b2028;
            this.prepareStage();
            this.loadFonts();
            PIXI.Loader.shared.load(function () {
                var text1 = _this.createText("ariblk", "Click here to start\nthe counter", 50, 10, 0, "center");
                var text1Graphics = _this.debugFont(text1);
                var text2 = _this.createText("win", "1.2", 280, 250, 0.5);
                var text2Graphics = _this.debugFont(text2, 0.5);
                var text21 = _this.createText("monospace_font", "1.3", 1400, 620, 0.5);
                var text21Graphics = _this.debugFont(text21, 0.5);
                var text3 = _this.createText("desyrel", "T\nY\nq\nb", 50, 350, 0, "left");
                _this.debugFont(text3);
                var text4 = _this.createText("ariblk", "Tab\nccd\ncdT\nb", 110, 350, 0, "center");
                _this.debugFont(text4);
                var text5 = _this.createText("andyb", "closed on weekdays", 270, 350, 0);
                text5.maxWidth = 260;
                _this.debugFont(text5);
                var text6 = _this.createText("andyb", "Nam quam nunc, blandit vel, luctus pulvinar", 270, 520, 0, "center");
                text6.maxWidth = 1050;
                _this.debugFont(text6);
                var text7 = _this.createText("andyb", "Nam quam nunc, blandit vel, luctus pulvinar", 270, 690, 0, "right");
                text7.maxWidth = 1050;
                _this.debugFont(text7);
                var text8 = _this.createText("ariblk", "Lorem ipsum", 800, 10, 0);
                _this.debugFont(text8);
                var text9 = _this.createText("ariblk", "PixiJS - \nHTML5 Creation Engine", 800, 90);
                text9.maxWidth = 600;
                _this.debugFont(text9);
                var text10 = _this.createText("desyrel", "Friendly, feature-rich API lets PixiJS take care of the fundamentals whilst you focus on producing incredible multiplatform experiences.", 800, 310, 0, "right", 36);
                text10.maxWidth = 600;
                _this.debugFont(text10);
                var text11 = _this.createText("other_font", "drops cake lollipop Chocolate Cake lemon brownie fruitcake gummies dessert Pie lollipop sesame snaps", 540, 160, 0, "center", 38);
                text11.maxWidth = 250;
                _this.debugFont(text11);
                var text12 = _this.createText("other_font", "drops cake lollipon Chocolate Cake lemon fruitcake gummies Pie lollipop sesame", 1400, 10, 0, "right");
                text12.maxWidth = 450;
                _this.debugFont(text12);

                var counter = 0;
                var startCounter = function () {
                    var _this = this;
					const gfxUpdate = (txt,gfx) => {
                        gfx.clear();
                        gfx.beginFill(_this.color, 0.6);
                        if (text2.textX != undefined) {
                            gfx.drawRect((txt.position.x + txt.textX) - (txt.textWidth * 0.5), (txt.position.y + txt.textY) - (txt.textHeight * 0.5), txt.textWidth * txt.scale.x, txt.textHeight * txt.scale.y);
                        }
                        else {
                            gfx.drawRect(txt.position.x - (txt.textWidth * 0.5), txt.position.y - (txt.textHeight * 0.5), txt.textWidth * txt.scale.x, txt.textHeight * txt.scale.y);
                        }
                        gfx.endFill();

					}
                    this.app.ticker.add(function (delta) {
                        text2.text = counter.toFixed(1).toString();
                        text21.text = counter.toFixed(1).toString();
                        counter += 0.1;
						gfxUpdate(text2,text2Graphics);
						gfxUpdate(text21,text21Graphics);
                    });
                }.bind(_this);
                text1.on("click", startCounter);
                text1Graphics.on("click", startCounter);
            });
        }
        Launcher.prototype.createText = function (fontName, text, x, y, anchor, align, size) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (anchor === void 0) { anchor = 0; }
            if (align === void 0) { align = "left"; }
            if (size === void 0) { size = -1; }
            var bitmapText = new PIXI.BitmapText("", { fontName: fontName, align: align });
            if (size != -1)
                bitmapText.fontSize = size;
            bitmapText.text = text;
            bitmapText.position.x = x;
            bitmapText.position.y = y;
            bitmapText.anchor.x = bitmapText.anchor.y = anchor;
            bitmapText.interactive = true;
            bitmapText.on("click", function () {
                console.log("text: " + bitmapText.text);
                if (bitmapText.textX != undefined) {
                    console.log("textX: " + bitmapText.textX);
                    console.log("textY: " + bitmapText.textY);
                    console.log("x: " + ((bitmapText.position.x + bitmapText.textX) - (bitmapText.textWidth * anchor)));
                    console.log("y: " + ((bitmapText.position.y + bitmapText.textY) - (bitmapText.textHeight * anchor)));
                }
                else {
                    console.log("x: " + ((bitmapText.position.x) - (bitmapText.textWidth * anchor)));
                    console.log("y: " + ((bitmapText.position.y) - (bitmapText.textHeight * anchor)));
                }
                console.log("width: " + (bitmapText.textWidth * bitmapText.scale.x));
                console.log("height: " + (bitmapText.textHeight * bitmapText.scale.y));
                console.log("");
            }.bind(this));
            return bitmapText;
        };
        Launcher.prototype.debugFont = function (text, anchor) {
            if (anchor === void 0) { anchor = 0; }
            var graphics = new PIXI.Graphics();
            graphics.beginFill(this.color, 0.6);
            var textX = 0;
            var textY = 0;
            if (text.textX != undefined) {
                textX = text.textX;
                textY = text.textY;
            }
            graphics.drawRect((text.position.x + textX) - (text.textWidth * anchor), (text.position.y + textY) - (text.textHeight * anchor), text.textWidth * text.scale.x, text.textHeight * text.scale.y);
            graphics.endFill();
            graphics.interactive = true;
            this.stage.addChild(graphics);
            this.stage.addChild(text);
            var infoC = new PIXI.Container();
            var info = new PIXI.Graphics();
            info.beginFill(0x80be00, 1);
            info.drawRect(text.position.x + textX - (text.textWidth * anchor), text.position.y + textY - (text.textHeight * anchor), text.textWidth * text.scale.x, 20);
            info.endFill();
            infoC.addChild(info);
            var textString = Math.round(graphics.width) + " x " + Math.round(graphics.height);
            var textInfo = new PIXI.Text(textString, { fontSize: 18, fontStyle: "bold" });
            textInfo.x = text.position.x + textX - (text.textWidth * anchor) + 5;
            textInfo.y = text.position.y + textY - (text.textHeight * anchor);
            infoC.addChild(textInfo);
            this.stage.addChild(infoC);
            infoC.visible = false;
            graphics.on("mouseover", function () {
                infoC.visible = true;
            });
            graphics.on("mouseout", function () {
                infoC.visible = false;
            });
            text.on("mouseover", function () {
                infoC.visible = true;
            });
            text.on("mouseout", function () {
                infoC.visible = false;
            });
            return graphics;
        };
        Launcher.prototype.prepareStage = function () {
            this.app = new PIXI.Application({
                backgroundColor: 0xFFFFFF,
                width: window.innerWidth,
                height: window.innerHeight
            });
            document.body.appendChild(this.app.view);
            this.stage = this.app.stage;
        };
        Launcher.prototype.loadFonts = function () {
            for (var i = 0; i < Launcher.FONTS.length; i++) {
                this.loadFont(Launcher.FONTS[i]);
            }
        };
        Launcher.prototype.loadFont = function (fontFilename) {
            PIXI.Loader.shared.add(`./${fontFilename}`);
        };
        Launcher.FONTS = [
            "andyb.xml",
            "ariblk.xml",
            "desyrel.xml",
            "font.xml",
            "monospace_font.xml",
            "other_font.fnt",
            "test.xml",
			"winFont.xml"
        ];
        return Launcher;
    }());
    Test.Launcher = Launcher;
})(Test || (Test = {}));
