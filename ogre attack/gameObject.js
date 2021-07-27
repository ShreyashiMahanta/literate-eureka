

AFRAME.registerComponent("ogre",{
    
    init : function(){
        for(var i = 0; i < 30; i++) {
            var ogre = document.createElement("a-entity");
            ogre.setAttribute("id", "ogre" + i);
            
            posX = Math.random()*200 -100;
            posY = 1;
            posZ = Math.random()*200 -100;

            position = {x : posX, y : posY, z : posZ};

            ogre.setAttribute("position", position);

            ogre.setAttribute("gltf-model", "./assets/ogre/scene.gltf");
       
            ogre.setAttribute("static-body",{});

            var scene = document.querySelector("#scene");
            scene.appendChild(ogre);
        }
    }
})