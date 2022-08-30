import Vue from 'vue'
import Vuex from 'vuex'
// import workflows from './modules/workflows'
import selected from "./modules/workflows/selected";
import undoRedo from "undo-redo-vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    plugins: [
        undoRedo({
            // The config object for each store module is defined in the 'paths' array
            paths: [
                {
                    namespace: "selected",
                    // Any mutations that you want the undo/redo mechanism to ignore
                    ignoreMutations: ["addShadow", "removeShadow"],
                },
            ],
        }),
    ],
    modules: {
        selected
    }
})
