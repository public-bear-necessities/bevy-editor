import * as vscode from 'vscode';
import { BevySceneEditor } from './editors/BevySceneEditor';
import { BevySidebar } from './editors/BevySidebar';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Hello World from Bevy Scene Editor!');
	context.subscriptions.push(
		vscode.window.registerCustomEditorProvider(
			'bevy-scene',
			new BevySceneEditor(context.extensionPath),
			{ webviewOptions: { retainContextWhenHidden: true } }
		)
	);
	vscode.window.registerTreeDataProvider('bevy-editor-views', new BevySidebar());
}

// This method is called when your extension is deactivated
export function deactivate() { }
