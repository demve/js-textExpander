JS TextExpander:
================
About:
------
This library helps the generation of complex code using simple 'functions/[snippets]' inside the text, designed for **helping no-tech related people in charge of CMS websites**.

The basic workflow goes like this:

1. Create a script to generate your custom expansion or rules using the [window object] textExpander.add() method.
2. Get the textarea value (or any text) with any method/library you like.
3. Call the [window object] textExpander.parse() method on that text.
4. you have the expanden version of that text, use as you please.

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