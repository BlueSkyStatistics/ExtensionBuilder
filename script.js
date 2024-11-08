

console.log("When running in chrome: go to inspect --> console!!");

        increasingNum = 0;
        function getLayout(layoutNum, target) {
            // LayoutNum is the Button that was clicked
            // target = event.target --> then set to the layout container


            // get closest item (w class '.layout') to drop loc
            const onLiftItem = target.closest('.layout'); 

            // squirrely test stuff
            const data = {
                ids: increasingNum
            };

            // set target = layout object
            while (!(target.classList.contains('layoutContainer'))) {
                target = target.parentNode;
            }


            if (layoutNum == 'btn3') { // Test Layout
                // if the target (the layout Container) exists: add element under target
                if (target) {
                    var tempHtmlTemplate =  `
                    <div class="test text layout" id="{{it.ids}}" item="test" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                        <p>Test Text!!</p>
                    </div>
                    `;
                }
            }
            if (layoutNum == 'btn6') { // Checkbox
                if (target) {
                    var tempHtmlTemplate=  `
                <div class='layout' id="{{it.ids}}" item="Checkbox" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <div class="form-check">
                    <input type="checkbox" bs-type="" parameterizeFormula = "TRUE" class="form-check-input" id="" no="" extractable='true' extractionRule="" true-value="" false-value=""onchange="changeCheckBox(event)" data-dependants=""default_state="" >
                    <label class="form-check-label" for="">Enter A Description</label>
                    </div>
                </div>
                    `;
                } 
            }
            if (layoutNum == 'btn7') { // Advanced slider variable
                if (target) {
                tempHtmlTemplate= 
                `<div class="row layout" id="{{it.ids}}" item="Advanced Slider Variable" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <div class="form-group mt-1 w-75">
                        <label for="">Input Control</label>
                        <div class="form-row">
                            <div class="col-8">
                                <input type="range" bs-type="slider" no="" class="custom-range slider" min="" max="" step="" value="" id="" default="" extractable=true extractionRule="">
                            </div>
                            <div class="col-4">     
                                <input id="_value" type="text" bs-type="text" placeholder="Click Here" extractable=false></input>
                            </div>
                        </div>
                    </div>
                    
                </div>`;
            }
            }
            if (layoutNum == 'btn8') { // Textbox
                if (target) {
                    tempHtmlTemplate= 
                `<div class="mb-2 layout" id="{{it.ids}}" item="Textbox" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <div class="row">
                        <div class="col-12">
                            <label for="" class="mt-2 mr-2 small-label">Input Title<span class="required"></label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <input class="" type="text" bs-type="" 
                                id="" 
                                placeholder="Click Here to Enter Text"
                                no="" extractable=true extractionRule="" 
                                ondrop="dropToInput(event)">
                        </div>
                    </div>
                </div>
    `;
                }
            }
            if (layoutNum == 'btn9') { // advanced textbox
                if (target) {
                tempHtmlTemplate= 
                `<div class="mb-2 layout" id="{{it.ids}}" item="Advanced Textbox" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <div class="row">
                        <div class="col-12">
                            <label for="" class="mt-2 mr-2 small-label">Enter Criteria<span class="required"></span></label>
                        </div>
                    </div>
                    <div id=""
                        extractable=true bs-type="advTxt" no="" extractionRule=""
                        style="overflow: auto"> 
                        <div class="row bg-gray m-1 p-2" el_index=0> 
                            <div class="col-12">
                                <div class="row">
                                <div id="advTextboxID" class="col-10 cm focus" bs-type="advancedTextBox"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            }
            if (layoutNum == 'btn10') { // Radio Button
                if (target) {
                    tempHtmlTemplate= 
                `<div class="form-check layout" id="{{it.ids}}" item="Radio Button" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <input class="form-check-input" 
                        type="radio" bs-type="radio" name="" 
                        no="" id="" 
                        extractable=true extractionRule="" 
                        value=""
                        onchange="changeRadio(event)"
                        default_state= >
                    <label class="form-check-label small-label" for="">
                        Enter A Description
                    </label>
                </div>`;
            }
            }
            if (layoutNum == 'btn11') { // Source Variable List
                if (target) {
                    tempHtmlTemplate= `
                <div class="layout" id="{{it.ids}}" item="Source Variable List" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
                    <h6>Source Variables</h6>
                    <div class="form-check list-group var-listSem" multiple 
                        modal_id=""
                        bs-type="cols" ondrop="" ondragover="">
                        <div class="curtain" bs-type="curtain">
                            <div class="fa fa-spin"></div> <!-- took out fa-spinner from this class -->
                        </div>
                    </div>
                </div>`;
                }
            }
            if (layoutNum == 'btn12') { // destination variable list
                if (target) {
                    tempHtmlTemplate= `
        <div class="layout" id="{{it.ids}}" item="Destination Variable List" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
            <div class="row">
                <div class="col col-xx">
                </div>
                <div class="col col-rr"><h6>Dest Variable Control</h6>
                </div>
            </div>
            <div class="row">
                <div class="col col-xx">
                    <button type="button" class="btn btn-outline-secondary btn-arrows" id="">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div class="col col-rr">    
                    <div class="list-group ms-list" id="" modal_id="" no="" bs-type="list" ondrop="" extractable=true extractionRule="" filter="" ondragover=""></div>
                </div>
            </div>
        </div>`;
                }   
            }
            if (layoutNum == 'btn13') { // Combo Box
                console.log("doesnt work: don't use ComboBox!");
                if (target) {
                    tempHtmlTemplate= `<div class="layout" id="{{it.ids}}" item="Combo Box" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
        <label for="" class="mt-2 mr-2 small-label layout">Combo Box</label>
        <div class="list-group  ms-list">
        
                <option>Option 1</option>
                <option>Option 2</option> 
                <option>Option 3</option> 
                <option>Option 4</option> 
       
        </div>
    </div>
    `;
                }
            }
            if (layoutNum == 'btn14') { // Destination Variable
                if (target) {
                    tempHtmlTemplate= `
<div class="layout" id="{{it.ids}}" item="Destination Variable" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
    <div class="row">
        <div class="col col-xx"></div>
            <div class="col col-rr"><h6>Dest Variable Control</h6></div>
        </div>
        <div class="row">
            <div class="col col-xx">
                <button type="button" class="btn btn-outline-secondary btn-arrows" id="">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="col col-rr">    
                <div class="list-group sg-list" id="" modal_id="" no="" bs-type="single" ondrop="" extractable=true extractionRule="" filter="" ondragover="">
            </div>
        </div>   
    </div>
</div>`;
                }
            }
            if (layoutNum == 'btn15') { // Source Dataset List
                if (target) {
                    tempHtmlTemplate= `
        <div class="layout" id="{{it.ids}}" item="Source Dataset List" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
            <h6>Source Dataset List</h6>
            <div class="form-check list-group var-list" multiple 
                modal_id=""
                bs-type="dss" ondrop="" ondragover="">
            </div>
        </div>`;
                }
            }
            if (layoutNum == 'btn16') { // Input Spinner
                if (target) {
                    tempHtmlTemplate= `
    <div class="row layout" id="{{it.ids}}" item="Input Spinner" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
        <div class="col-12">
            <label for="" class="mt-2 mr-2 small-label">Input Spinner</label>
            <input class="w-25" type="number" bs-type="text" id="" no="" extractable=true extractionRule="" min="" max="" step="" value="">
        </div>
    </div>`;
                }
            }
            if (layoutNum == 'btn17') { // Label
                if (target) {
                    tempHtmlTemplate= `<p id="{{it.ids}}" Item="Label" no="" bs-type="label" class="layout" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">Label Text Here</p>`
                }
            }
            if (layoutNum =='btn18') { // Select
                if (target) {
                    tempHtmlTemplate= `<div class="simple-select layout" id="{{it.ids}}" item="Select" draggable="true" ondragstart="dragLay(event)" onclick="clickedLay(event)">
    <label for="" class="mt-2 mr-2 small-label">Select Info Here</label>
    <select class="form-select mb-3" bs-type="select" id="" no="" extractable=true default="" extractionRule="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
    </select>
    </div>
    `;
                }
            }
            
            // squirrely part to update ids
            var htmlTemplate = Sqrl.render(tempHtmlTemplate, data);

            // adds the item to the page after drop
            if (onLiftItem == null) {
                target.insertAdjacentHTML('beforeend', htmlTemplate);
                // adds codeMirror code --> ONLY FOR Advanced Textbox
                if (layoutNum == 'btn9') {
                    const editor = CodeMirror(document.getElementById('advTextboxID'), {
                        lineNumbers: true,
                        mode: "javascript"
                    });
                }
            } else {
                onLiftItem.insertAdjacentHTML('afterend', htmlTemplate);
            }
            increasingNum++; // do I need to have ids on each element??
        }

        
        // getting buttons to work

        // get 1st layout to work
        document.getElementById("btn1").addEventListener('click', function() {
            var layoutContainer = document.getElementById('layoutContainer');
            var firstLayout =  `
                <div class="row full-height">
                    <div class="col col-12 layoutContainer" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
                </div>
            `;
            layoutContainer.innerHTML = firstLayout;
        });
        // 2nd layout
        document.getElementById("btn2").addEventListener('click', function() {
            var layoutContainer = document.getElementById('layoutContainer');
            var secondLayout =  `
                <div class="row full-height">
                    <div class="col col-4 layoutContainer" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
                    <div class="col col-8 layoutContainer col-border" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
                </div>
            `;
            layoutContainer.innerHTML = secondLayout;
        });

        // Get the popup
        var popup = document.getElementById("popup");

        // Get the button that opens the popup
        var btn = document.getElementById("openPopupBtn");  

        // Get the <span> element that closes the popup
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the popup 
        btn.onclick = function() {
            popup.style.display = "block";
        }

        // When the user clicks anywhere outside of the popup, close it
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }

        async function clickedLay(event) {
            
            item = event.target; // gets targeted item

            while (!(item.hasAttribute('item'))) { // then loops outward to get first item w attribute
                item = item.parentNode;
            }

            attributeInfo = item.getAttribute('item'); // gets the info of item attribute

            var propPanel = document.getElementById('PropertyPanel');

            if (attributeInfo === 'test') {
                console.log("test works!");
            } if (attributeInfo === 'Checkbox') {
                console.log('Checkbox works');

                var SquirrelyProps = {
                    title: 'Checkbox',
                    textbox1: '',
                    textbox2: '',
                    textbox3: '',
                }

                var properties = `
                <div>
                    <label style="color: black;"><Strong>Type: </Strong></label> <br>
                    <label style="color: black;"><em>Checkbox Control</em></label> <br>

                    <label style="color: black;"><Strong>Name: </Strong></label> <br>
                    <input type="text" value="{{it.textbox1}}" placeholder="Enter name here"> <br>

                    <label style="color: black;"><Strong>Text: </Strong></label> <br>
                    <input type="text" value="{{it.textbox2}}" placeholder="Enter text here"> <br>

                    <label style="color: black;"><Strong>IsSelected: </Strong></label> <br>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>

                    <label style="color: black;"><Strong>CanExecute: </Strong></label> <br>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse1" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse1" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>

                    <label style="color: black;"><Strong>Enabled: </Strong></label> <br>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse2" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse2" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>

                    <label style="color: black;"><Strong>Syntax: </Strong></label> <br>
                    <input type="text" value="{{it.textbox3}}" placeholder="Enter syntax here"> <br>

                    <label style="color: black;"><Strong>Syntax When Unchecked: </Strong></label> <br>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse3" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse3" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>
                </div>
                `;

            } if (attributeInfo === 'Advanced Slider Variable') {
                console.log("slider works");
                var properties = `
                <div>
                    <label style="color: black;"><Strong>Type: </Strong></label> <br>
                    <label style="color: black;"><em>Checkbox Control</em></label> <br>

                    <label style="color: black;"><Strong>Name: </Strong></label> <br>
                    <input type="text" placeholder="Enter name here"> <br>

                    <label style="color: black;"><Strong>Maximum: </Strong></label> <br>
                    <input type="number" placeholder="Enter value here"> <br>

                    <label style="color: black;"><Strong>Minimum: </Strong></label> <br>
                    <input type="number" placeholder="Enter value here"> <br>
                </div>
            `;

            } if (attributeInfo === 'Textbox') {
                console.log("Textbox works");
            } if (attributeInfo === 'Advanced Textbox') {
                console.log("Advanced Textbox works");
            } if (attributeInfo === 'Radio Button') {
                console.log("Radio Button works");

                var SquirrelyProps = {
                    title: 'Radio Button', // switch to title: attributeInfo
                    button1: 'false',
                    button2: 'false',
                    button3: 'false',
                    textbox1: '',
                    textbox2: '',
                    textbox3: '',
                };

                // set value property of textbox to Squirrely
                // what property determines the radio button?

                var properties = `
                <div>
                    <label style="color: black;"><Strong>Type: </Strong></label> <br>
                    <label style="color: black;"><em>RadioButton Control</em></label> <br>

                    <label style="color: black;"><Strong>Name: </Strong></label> <br>
                    <input type="text" value="{{it.textbox1}}" placeholder="Enter name here"> <br>

                    <label style="color: black;"><Strong>Text: </Strong></label> <br>
                    <input type="text" value="{{it.textbox2}}" placeholder="Enter text here"> <br>

                    <label style="color: black;"><Strong>GroupName: </Strong></label> <br>
                    <input type="text" value="{{it.textbox3}}" placeholder="Enter GroupName here"> <br>

                    <label style="color: black;"><Strong>IsSelected: </Strong></label> <br>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse1" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse1" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>
                    <label style="color: black;"><Strong>CanExcecute: </Strong></label> <br>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse2" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse2" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>

                    <label style="color: black;"><Strong>Enabled: </Strong></label> <br>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse3" value="true">
                        <label style="color: black;" class="form-check-label" for="trueOption">
                            True
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="trueFalse3" value="false">
                        <label style="color: black;" class="form-check-label" for="falseOption">
                            False
                        </label>
                    </div>
                </div>
                `;
            } if (attributeInfo === 'Source Variable List') {
                console.log("SRC variable list works");
            } if (attributeInfo === 'Destination Variable List') {
                console.log("Dest Var list works");
            } if (attributeInfo === 'Combo Box') {
                console.log("ComboBox works");
            } if (attributeInfo === 'Destination Variable') {
                console.log("Dest Var works");
            } if (attributeInfo === 'Source Dataset List') {
                console.log("Source Dataset List");
            } if (attributeInfo === 'Input Spinner') {
                console.log("Input Spinner works");
            } if (attributeInfo === 'Label') { // LABEL LAYOUT
                console.log("Label works");

                var fetchedData;
                // GETS data
                fetch('http://localhost:3000/getData')
                .then(response => response.json())
                .then(data => {
                    console.log('Success in Getting!:', data); // chrome console
                    fetchedData = data;
                })
                .catch((error) => {
                    console.error('Error in Getting!', error);
                });

            } if (attributeInfo === 'Select') { // SELECT LAYOUT
                console.log("Select works");

                // This SETS the data of John Doe
                const data = { name: 'Johnaa Doae', age: 30 };
                fetch('http://localhost:3000/setData', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success in Setting:', data); // chrome console
                    //document.getElementById('response').textContent = `Server Response: ${JSON.stringify(data)}`; // chrome web
                  })
                  .catch((error) => {
                    console.error('Error In Setting!:', error);
                  });
                
            } 
            // saveOldItems(); // saves old propertyPanel that was pulled up before
            const updatedProps = await loadItems(SquirrelyProps, properties); // then loads in new items to new propertyPanel
            //console.log("origionalProperties: ", properties);
            propPanel.innerHTML = updatedProps;
        }

        // layoutKey are the Squirrely Properties,
        // template is the htmlTemplate
        async function loadItems(LayoutKey, template) { 
            //console.log("teplate properties: ", template);
            //console.log("LayoutKey Properties: ", LayoutKey);

            // SEND layoutKey to server
            fetch('http://localhost:3000/setLayoutKey', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(LayoutKey),
            })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error In LoadItems Set!:', error);
            });

            var newData;
            // GETS data based on layoutKey
            await fetch('http://localhost:3000/getData1')
            .then(response => response.json())
            .then(data => {
                //console.log('Success in Getting from LoadItems!:', data); // chrome console
                newData = data;
            })
            .catch((error) => {
                console.error('Error in LoadItems Get!:', error);
            });

            // Copy newData elements to LayoutKey
            LayoutKey = Object.assign({}, newData);

            //console.log("getting updated layoutKey data after: ", LayoutKey);

            //returnes the rendered sqrl layout
            var renderedLayout = Sqrl.render(template, LayoutKey);
            //console.log("updated SQRL layout: ", renderedLayout);
            return renderedLayout;
        }



        // drag and drop code
        function drag(event) { // add "event.dataTransfer.setDragImage(customDragImage, 25, 25);"
            // then set Image to event.target.id
            event.dataTransfer.setData("text", event.target.id);
        }
        // note: btn1 has layout w onDragOver && onDrop
        function drop(event) { // use event.dataTransfer.dropEffect = '...'; to copy / ect data onDrop
            event.preventDefault();
            const data = event.dataTransfer.getData("text"); // gets btn# from drag()
            var element = document.getElementById(data);

            if (element.classList.contains('btn')) { // if dragging the button
                getLayout(data, event.target);
            } else { // if dragging element
                const onLiftItem = event.target.closest('.layout');
                target = event.target;
                while (!(target.classList.contains('layoutContainer'))) {
                    target = target.parentNode;
                }
                elementHTML = element.outerHTML; // have to get the string html version
                if (onLiftItem == null) { // if user didn't release element on another element
                    target.insertAdjacentHTML('beforeend', elementHTML);
                } else {
                    onLiftItem.insertAdjacentHTML('afterend', elementHTML);
                }
                element.remove();
            }
        }
        function allowDrop(event) {
            event.preventDefault();
        }

        function dragLay(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        }