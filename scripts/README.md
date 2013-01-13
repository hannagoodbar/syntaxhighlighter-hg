# Brush files #

## IBM ILE RPG (rpgle, rpg4) ##
Highlighter for IBM ILE RPG up to version 6.1.

_sample?_

## IBM User Interface Manager markup (uim) ##
Highlighter for IBM's User Interface Manager for IBM i / i5 OS / OS/400. Used to define help for i5 OS commands, and for defining UIM display panels. UIM is a tag language similar in use to XML. Tags begin with a colon and end with a period. Some tags, such as _:help._ have attributes (:help name='dsprcdfmt/output'.). Many tags have corresponding ending tags, such as _:help._ and _:ehelp._ Other tags, like _:pd._, do not require an ending tag.

**UIM example:**<br/>
:help name='dsprcdfmt/output'.Output (OUTPUT) parameter<br/>
:xh3.Output (OUTPUT) parameter<br/>
:p.Specifies whether the output from the command is displayed at the requesting<br/>
work station or printed with the job's spooled output.<br/>
:p.The possible parameters are&colon.<br/>
:p.:parml.:pt.:pk def.*:epk.<br/>
:pd.The output is displayed (if requested by an interactive job) or printed with<br/>
the job's spooled output (if requested by a batch job).<br/>
:pt.*PRINT<br/>
:pd.The output is printed with the job's spooled output.<br/>
:eparml.<br/>
:ehelp.<br/>
