import * as vscode from 'vscode';

export class BevySidebar implements vscode.TreeDataProvider<vscode.TreeItem>
{
    getTreeItem(element: vscode.TreeItem) {
        return element;
    }

    getChildren(element: vscode.TreeItem) {
        if (element && element.label === 'Item 1') {
            return [
                new vscode.TreeItem('Item 4'),
                new vscode.TreeItem('Item 5'),
                new vscode.TreeItem('Item 6'),
            ];
        }
        return [
            new vscode.TreeItem('Item 1', vscode.TreeItemCollapsibleState.Collapsed),
            new vscode.TreeItem('Item 2'),
            new vscode.TreeItem('Item 3'),
        ];
    }
}