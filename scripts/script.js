let app = document.getElementById('type');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Programmer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Gamer.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Student.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Artist.')
    .pauseFor(2500)
    .start();