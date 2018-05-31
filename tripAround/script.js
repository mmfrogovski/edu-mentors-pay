var guidersJSON = {};

$.getJSON('guiders.json', function (data) {
    console.log(data);
    guidersJSON = jQuery.extend(true, {}, data);
});

var inputValueP_NODES = document.querySelectorAll('.value');
var inputRange_NODES = document.querySelectorAll('.range');
var inputCity_NODE = document.querySelector('.city-input');

var city = inputCity_NODE.value;;
var maxAge = inputRange_NODES[0].value;
var minRate = inputRange_NODES[1].value;

var thisArtsChildren = [],
    thisParksChildren = [],
    thisClubsChildren = [];

var artsChildren = [],
    parksChildren = [],
    clubsChildren = [];

//==================================================//

inputValueP_NODES[0].innerText = '0 — ' + inputRange_NODES[0].value;
inputValueP_NODES[1].innerText = inputRange_NODES[1].value + '/5';

function rangeInputAge() {
    inputValueP_NODES[0].innerText = '0 — ' + inputRange_NODES[0].value;
    maxAge = inputRange_NODES[0].value;
}

function rangeInputRate() {
    inputValueP_NODES[1].innerText = inputRange_NODES[1].value + '+/5';
    minRate = inputRange_NODES[1].value;
}

function cityInput() {
    city = inputCity_NODE.value;
}

function filterGuiders() {

    thisArtsChildren = new Array(0);
    thisParksChildren = new Array(0);
    thisClubsChildren = new Array(0);

    artsChildren = new Array(0);
    parksChildren = new Array(0);
    clubsChildren = new Array(0);



    ReactDOM.render(React.createElement(function () {
        return React.createElement('div', {
            id: 'react-arts',
            className: 'react-container'
        })
    }), document.getElementById('arts-col'));

    ReactDOM.render(React.createElement(function () {
        return React.createElement('div', {
            id: 'react-clubs',
            className: 'react-container'
        })
    }), document.getElementById('clubs-col'));

    ReactDOM.render(React.createElement(function () {
        return React.createElement('div', {
            id: 'react-parks',
            className: 'react-container'
        })
    }), document.getElementById('parks-col'));



    for (let i = 0; guidersJSON[i] !== undefined; i++) {

        if (guidersJSON[i].city === city && guidersJSON[i].age <= maxAge && guidersJSON[i].rate >= minRate) {

            if (guidersJSON[i].place === 'arts') {
                function artsGuidesBlock(props) {
                    thisArtsChildren.push(React.createElement('h4', null, guidersJSON[i].name + ', ' + guidersJSON[i].age));
                    thisArtsChildren.push(React.createElement('h5', null, 'Rating: ' + guidersJSON[i].rate + '/5'));

                    artsChildren.push(React.createElement('div', {
                        className: 'guider-block'
                    }, thisArtsChildren));
                    return React.createElement('div', {
                        className: 'guider-containter'
                    }, artsChildren);
                };

                ReactDOM.render(React.createElement(artsGuidesBlock), document.getElementById('react-arts'));
                thisArtsChildren = new Array(0);
            }
            if (guidersJSON[i].place === 'clubs') {
                function clubsGuidesBlock(props) {
                    thisClubsChildren.push(React.createElement('h4', null, guidersJSON[i].name + ', ' + guidersJSON[i].age));
                    thisClubsChildren.push(React.createElement('h5', null, 'Rating: ' + guidersJSON[i].rate + '/5'));

                    clubsChildren.push(React.createElement('div', {
                        className: 'guider-block'
                    }, thisClubsChildren));
                    return React.createElement('div', {
                        className: 'guider-containter'
                    }, clubsChildren);
                };

                ReactDOM.render(React.createElement(clubsGuidesBlock), document.getElementById('react-clubs'));
                thisClubsChildren = new Array(0);
            }
            if (guidersJSON[i].place === 'parks') {
                function parksGuidesBlock(props) {
                    thisParksChildren.push(React.createElement('h4', null, guidersJSON[i].name + ', ' + guidersJSON[i].age));
                    thisParksChildren.push(React.createElement('h5', null, 'Rating: ' + guidersJSON[i].rate + '/5'));

                    parksChildren.push(React.createElement('div', {
                        className: 'guider-block'
                    }, thisParksChildren));
                    return React.createElement('div', {
                        className: 'guider-containter'
                    }, parksChildren);
                };

                ReactDOM.render(React.createElement(parksGuidesBlock), document.getElementById('react-parks'));
                thisParksChildren = new Array(0);
            }

        }
    }
}

//==================================================//

/*
function App(props) {
    return React.createElement('h1', null, 'Hello world');
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('par')
);
*/
