import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class BevySceneEditor implements vscode.CustomTextEditorProvider {

	extensionPath: string;

	constructor(extensionPath: string) 
	{
		this.extensionPath = extensionPath;
	}

	resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
		// Get path to the HTML file on disk
        const htmlPath = path.join(this.extensionPath, 'src','frontend', 'page.html');

        // Read HTML file synchronously
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        webviewPanel.webview.html = htmlContent;
	}
}