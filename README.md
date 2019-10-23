# compound-calc

## Getting Started
Step 1: Simply include the CSS and JS files in the dist folder into your HTML file
`
<link href="./dist/compound-calc.css" rel="stylesheet" />
<script type="text/javascript" src="./dist/compound-calc.js"></script>
`

Step 2: Create an element in your HTML with a unique id attribute (id attributes should always be unique)
`
<div id="calc-target"></div>
`

Step 3: Instantiate the calculator using the id attribute of your target element
`
<script>
    window.addEventListener('load', function () {
        new compoundCalc('calc-target');
    });
</script>
`