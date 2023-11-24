+++
title = "Second Post"
author = ["Jonathan Peel"]
date = 2023-11-24T07:24:00+03:00
tags = ["blog"]
draft = false
+++

This is the second post.
I want to try output instead f results.

{{< highlight fsharp >}}
printfn "Hello, World!"
{{< /highlight >}}

doesn't print output, but it does print results.

{{< highlight fsharp >}}
let greet name = $"Hello, {name}!"
{{< /highlight >}}

Which is called with

<a id="code-snippet--sp-call-greet"></a>
{{< highlight fsharp >}}
greet "Jonathan P"
{{< /highlight >}}

Which will then return:

```text
Hello, Jonathan P!
```
