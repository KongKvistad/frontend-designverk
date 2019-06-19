
let btn = document.querySelector(".btn");

        let illo = new Zdog.Illustration({
        // set canvas with selector
        element: '.zdog-canvas',
        zoom: 2,
        resize: 'fullscreen',
        dragRotate: true,
        });

        // add circle
       let circ = new Zdog.Ellipse({
        addTo: illo,
        diameter: 200,
        stroke: 40,
        color: '#636',
        });

        new Zdog.Shape({
            addTo: illo,
            path: [
              { x: -32, y: -40 }, // start at top left
              { x:  32, y: -40 }, // line to top right
              { x: -32, y:  40 }, // line to bottom left
              { x:  32, y:  40 }, // line to bottom right
            ],
            closed: false,
            stroke: 20,
            color: '#636',
            translate: { z: -1 }
          });

        // update & render
        illo.updateRenderGraph();

        function animate() {
           
            btn.addEventListener("click", e=> {
                illo.zoom = 4;
                circ.color = "#600"

            })
            // rotate illo each frame
            circ.rotate.y += 0.01;
            illo.updateRenderGraph();
            // animate next frame
            requestAnimationFrame( animate );
          }
          // start animation
          animate();