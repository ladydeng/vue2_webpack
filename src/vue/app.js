export default {
    template:`
    <div>
        <p>这是一个app.js</p>
        <p>{{ message }}</p>
    </div>
    `,
    data(){
        return {
            message:'Hello Webpack'
        }
    }
}