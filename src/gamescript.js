var world;
var worldScale = 30;

var gameScene = cc.Scene.extend({
	onEnter:function() {
		this._super();
		gameLayer = new game();
		gameLayer.init();
		this.addChild(gameLayer);
	}
});

var game = cc.Layer.extend({
	init:function() {
		this._super();
		var backgroundLayer = cc.LayerGradient.create(cc.color(0xdf, 0x9f, 0x83, 255), cc.color(0xfa, 0xf7, 0x9f, 255));
		this.addChild(backgroundLayer);
		var gravity = new Box2D.Common.Math.b2Vec2(0, -10);
		world = new Box2D.Dynamics.b2World(gravity, true);
		this.scheduleUpdate();
	},
	update:function(dt) {
		world.Step(dt, 10, 10);
		console.log(world);
	}
});