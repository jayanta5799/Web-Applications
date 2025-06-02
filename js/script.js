// Change all text color when color is picked
        document.getElementById('colorPicker').addEventListener('input', function(e) {
            document.body.style.setProperty('--main-color', e.target.value);
        });