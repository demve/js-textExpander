JS TextExpander:
================
About:
------
This library helps the generation of complex code using simple 'functions/[snippets]' inside the text, designed for **helping no-tech related people in charge of CMS websites**.

Licenced under MIT.

### What it does:

Given a string, textExpander will parse for substring like **{{rule(param1|param2)}}** and replace its content with the result of a predefined function **rule(param1,param2)** allowing to "mask" complex markup behind simple snippets directly in a textarea.

### The files included are

* **textexpander.js:** The library file.
* **textexpander.min.js:** The minified library file.
* **index.html:** The demo, you write in the textarea press the button and check the output.
* **example.rules.js:** For the demo, the example rules.
* **jquery.min.js:** For the demo, not required.
* **LICENSE.txt:** The MIT licence.
* **README.md:** This readme file.


### Basic workflow:

1. Create a script
 to generate your custom expansion or rules using the *[window object]* **textExpander.add()** method.
2. Get the textarea value (or any text) with any method/library you like.
3. Call the *[window object]* **textExpander.parse()** method on that text.
4. You have the expanded version of that text, use as you please.

### Practical Usage

The library started because of the need of a simple way to add complex -bootstrap like- markup in a project where the person in charge had little -to none- technical knowlede. That why inserting html, css clases and other markup was not a solution. The admin panel ended up being a simple textarea for the content with the complex markup parsed from simple snippets like `{{button(Check this out!|product)}}`. This button snippet expanded to a more bootstrap like syntax `<a class="btn btn-primary" href="product.php">Check this out!</a>`

Code Example:
-------------
```html
<script src="textexpander.js"></script>
<script src="textexpander.rules.js"></script><!--Optional Not Included-->
<script>
    //Example of adding a rule
    textExpander.add(
        "greeting",
        ["who","how"],
        function(options,defaults){ //Free to do as you like
            var who = options[0] || defaults[0]
            ,  how = options[1] || defaults[1];
            return "<span class='extra-confusing-style-for-bootstrap-like-framework'>"+how+"</span> "+who;
        }
    );

    //Expanding Text:
    var text = "Testing TextExpander: {{greeting(World|Helo)}}"
    ,   expanded = textExpander.parse(text);
    console.log(expanded); //Testing TextExpander: <span class='extra-confusing-style-for-bootstrap-like-framework'>Hello</span> World
</script>
```

Creating Rules:
---------------

Creating a new expansion rule is quite easy, using the **textExpander.add** method that accepts three parameters:

* **Name:** the name of the rule.
* **Defaults:** The defaults values of the options that should be passed in.
* **Callback:** the function to execute when the rule is called
    * The callback function accepts two variables: **options** and **defaults**
        * **Options:** are the value pased between the parenthesis in the original text
        * **Defaults:** are the defaults defined before
    * **Important:** this function should return a string or a *"stringifiable"* result

Other Methods:
--------------
```html
changeSeparator(string="|");      // change the separator for the options
                                  // e.g: ; instead of |
changeRegExp(regexp=/{{(.*?)}}/g) // change the regular expresion for the snippets
                                  // eg: {rule(opts)} instead of {{rule(opts)}}
```