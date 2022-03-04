
import '../../vox-viewer'
import { LitElement, html } from 'lit-element'

class DemoPage extends LitElement
{
    static get is()
    {
        return 'demo-page'
    }

    static get properties() 
    {
        return { 
            selectedModel: { type: String }
        }
    }

    constructor()
    {
        super()
        this.selectedModel = 'model'
    }

    onModelSelected(e)
    {
        const modelSelection = this.shadowRoot.querySelector("#model-selection")

        console.log(modelSelection.value)
        this.selectedModel = modelSelection.value
    }

    render() 
    {
        return html`
            <style>
            
                :host
                {
                    display: block;
                    margin: 0px;
                    padding: 10px;
                }

                .container
                {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            </style>

            <div class="container">

                <vox-viewer 
                    src="./models/${this.selectedModel}.vox" 
                    camera-controls
                    auto-rotate
                    shadow-intensity="0.3"
                    style="height: calc(100vh - 50px); width: calc(100vh - 50px);"
                ></vox-viewer>
                
            </div>
        `;
    }
}

customElements.define(DemoPage.is, DemoPage);