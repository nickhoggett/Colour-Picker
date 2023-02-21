function render() {
    const pickerValue = document.getElementById('color-picker').value
    const dropdownValue = document.getElementById('color-schemes').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickerValue.substring(1)}&mode=${dropdownValue}&count=5`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            let hexValuesHtml = ""
            let colorGridHtml = ""
            const colors = data.colors
            for (color of colors) { 
                hexValuesHtml += `<p class="hex-value">${color.hex.value}</p>`
                colorGridHtml += `<div class="color" style="background:${color.hex.value}"></div>`
            }
            document.getElementById('hex-values').innerHTML = hexValuesHtml
            document.getElementById('color-grid').innerHTML = colorGridHtml
            document.body.style.background = `linear-gradient(90deg, ${colors[0].hex.value} 0%, ${colors[1].hex.value} 25%, ${colors[2].hex.value} 50%, ${colors[3].hex.value} 75%, ${colors[4].hex.value} 100%)`
        })
}

render()
document.getElementById('get-scheme').addEventListener('click', render)


