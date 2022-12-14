var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","0d8d639f-8685-4deb-9c72-fdb130d6fbbf","57c46808-b1c5-4f23-b237-4910eb769d71","ad9098bd-de5b-461d-9d20-a45c46bef9f3","bcb14380-9504-4078-848d-b518a99de437","bef9097a-a0b4-469d-ae32-792aabb92cf0"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"nVycIvu5tGDX0r9kZqCtm9m96B4A4RE_","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"e9Qd6AMlJJvCJTuTptnwwCWsylmWy3Ir","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"cJNwb_M_0cY0xxESmvb6.6PGwmQ738Zb","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"0d8d639f-8685-4deb-9c72-fdb130d6fbbf":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"57c46808-b1c5-4f23-b237-4910eb769d71":{"name":"alien_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bSvHi.1CZI.Ys5vkrK4kJJiGBaWZz_Tn/category_fantasy/alien_18.png","frameSize":{"x":261,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bSvHi.1CZI.Ys5vkrK4kJJiGBaWZz_Tn","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bSvHi.1CZI.Ys5vkrK4kJJiGBaWZz_Tn/category_fantasy/alien_18.png"},"ad9098bd-de5b-461d-9d20-a45c46bef9f3":{"name":"alien_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png"},"bcb14380-9504-4078-848d-b518a99de437":{"name":"alien_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mj2ti2iXM44mDQz.rcLgzlE_41.J15kR/category_fantasy/alien_03.png","frameSize":{"x":389,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"mj2ti2iXM44mDQz.rcLgzlE_41.J15kR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mj2ti2iXM44mDQz.rcLgzlE_41.J15kR/category_fantasy/alien_03.png"},"bef9097a-a0b4-469d-ae32-792aabb92cf0":{"name":"sticker_34_1","categories":["stickers"],"frameCount":1,"frameSize":{"x":244,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:38:31 UTC","pngLastModified":"2021-01-05 19:38:40 UTC","version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","sourceSize":{"x":244,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("bg_landscape21_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("sticker_34_1");
hero.scale=.2;
enemy1.setAnimation("alien_18_1");
enemy1.scale=.2;
enemy2.setAnimation("alien_12_1");
enemy2.scale=.2;
enemy3.setAnimation("alien_03_1");
enemy3.scale=.2;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  

  background("white");
createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-5
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+5
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
