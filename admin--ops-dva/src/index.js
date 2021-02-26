"use strict"

import "./index.scss"

import dva from "dva"

import router from "./router"

import countModel from "./models/count"

const app = dva()

app.model(countModel)

app.router(router)

app.start("#app")
