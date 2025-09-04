/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 */

import "../src/ui/css/main.css";
import { mount } from "svelte";
import app from "../src/ui/app.svelte";

export default mount(app, { target: document.getElementById("app") });
