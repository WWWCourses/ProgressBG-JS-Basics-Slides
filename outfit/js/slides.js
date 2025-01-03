function themeSwitcher(themeName){
    alert("themeSwitcher ON");
    document.getElementById('theme').setAttribute('href','/ProgressBG-Front-End-Dev/lib/reveal.js/dist/theme/'+themeName+'.css');
}
function  PrettyPreCode(){
    var codeNodes = document.querySelectorAll('pre>code');

    for (var i = 0; i < codeNodes.length; i++)
    {
        var content = codeNodes[i].innerHTML;

        // get indent
        var indent =  content.match(/^\n*(\s*)/)[1];

        // remove indent from all lines
        var indentRE = new RegExp("^" + indent, "gm");
        content = content.replace(indentRE, "");

        // clean empty lines on start/end
        content = content.replace(/^\s*/,"");
        content = content.replace(/\s*$/, "");

        codeNodes[i].innerHTML = content;
        codeNodes[i].style.overflow="auto";
    }
}
function  PrettyPreCodeOld(){
    var codeNodes = document.querySelectorAll('pre>code');

    for (var i = 0; i < codeNodes.length; i++)
    {
        var content = codeNodes[i].innerHTML;
        // console.log("content:", content);

        var lines = content.split('\n');
        // console.log("lines:", lines);

        if ( !lines[1] ){
            continue;
        }
        var tab_index = lines[1].search(/\S/);
        // console.log("tab_index", tab_index);

        var contentNew = '';
        for ( var j=0; j<lines.length; j++ ){
            lines[j] = lines[j].substring(tab_index-1);
            contentNew += lines[j]+'\n';
        }

        codeNodes[i].innerHTML = contentNew;
        codeNodes[i].style.overflow="auto";
    }
}

function addDownloadButton_old() {
    document.querySelectorAll('.downloadButton').forEach(button => {
        button.addEventListener('click', function() {
            const fileName = this.getAttribute('data-filename');
            const gistId = this.getAttribute('data-gistid');
            const link = document.createElement('a');
            link.href = `https://gist.githubusercontent.com/WWWCourses/${gistId}/raw/${fileName}`;
            link.setAttribute('download', fileName); // Force download
            link.style.display = 'none';
            this.appendChild(link);
            link.click();
            // document.body.removeChild(link);
        });
    });
}

function addCopyButton() {
    // Selects all "pre>code" elements with the data-copy attribute
    const filteredCodeBlocks = document.querySelectorAll('pre > code[data-copy] ');
    // console.dir(filteredCodeBlocks);
    // Filter code blocks to exclude those with data-no-copy attribute
    // const filteredCodeBlocks = Array.from(codeBlocks).filter(codeBlock =>
    //     !codeBlock.hasAttribute('data-no-copy')
    // );

    filteredCodeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.innerText = 'Copy';
        // button.innerHTML = '<i class="fa-regular fa-copy"></i>'
        button.classList.add('copy-button');

        const wrapper = document.createElement('div');
        wrapper.classList.add('code-wrapper')

        block.parentNode.parentNode.insertBefore(wrapper, block.parentNode);

        wrapper.appendChild(block.parentNode);
        wrapper.appendChild(button);

        button.addEventListener('click', () => {
            const text = block.innerText.trim();
            navigator.clipboard.writeText(text).then(() => {
                button.innerText = 'Copied!';
                setTimeout(() => (button.innerText = 'Copy'), 2000);
            });
        });
    });
}


function addDownloadButton() {
    document.querySelectorAll('.downloadButton').forEach(button => {
        button.addEventListener('click', async function(event) {
            event.preventDefault();
            const fileName = this.getAttribute('data-filename');
            const gistId = this.getAttribute('data-gistid');
            const url = `https://gist.githubusercontent.com/WWWCourses/${gistId}/raw/${fileName}`;

            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
            } catch (error) {
                console.error('Error downloading the file:', error);
            }
        });
    });
}

addDownloadButton()
PrettyPreCode();
addCopyButton()

