# Brush files #

## IBM ILE RPG (rpgle, rpg4) ##
Highlighter for IBM ILE RPG up to version 6.1.

_sample?_

## IBM User Interface Manager markup (uim) ##
Highlighter for IBM's User Interface Manager for IBM i / i5 OS / OS/400. Used to define help for i5 OS commands, and for defining UIM display panels. UIM is a tag language similar in use to XML. Tags begin with a colon and end with a period. Some tags, such as _:help._ have attributes (_:help name='...'._). Many tags have corresponding ending tags, such as _:help._ and _:ehelp._ Other tags, like _:pd._, do not require an ending tag.

``` plain UIM example
:help name='dsprcdfmt/output'.Output (OUTPUT) parameter
:xh3.Output (OUTPUT) parameter
:p.Specifies whether the output from the command is displayed at the requesting
work station or printed with the job's spooled output.
:p.The possible parameters are&amp;amp;colon.
:p.:parml.:pt.:pk def.*:epk.
:pd.The output is displayed (if requested by an interactive job) or printed with
the job's spooled output (if requested by a batch job).
:pt.*PRINT
:pd.The output is printed with the job's spooled output.
:eparml.
:ehelp.
```
