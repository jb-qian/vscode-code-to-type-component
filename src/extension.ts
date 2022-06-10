// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { getTypeStructure } from '@ks/code-to-type';
import { getPaste } from './utils/config';

// 获取配置
const config = vscode.workspace.getConfiguration('code-to-type.default');

export function activate(context: vscode.ExtensionContext) {
    const cmd = [
        vscode.commands.registerCommand('code-to-type.copy', async () => {
            try {
                const code = await getPaste();
                // 获取传入字符串的 ts 类型
                const nodeTypes = getTypeStructure(code, {
                    spaces: config.get('spaces'),
                    export: config.get('export'),
                });
                const activeTextEditor = vscode.window.activeTextEditor;
                activeTextEditor?.edit((editBuilder) => {
                    const line = activeTextEditor.selection.end.line;
                    editBuilder.insert(new vscode.Position(line, 0), nodeTypes.join('\n'));
                });
            } catch (error) {
                vscode.window.showErrorMessage('操作失败');
            }
        }),
    ];
	context.subscriptions.push(...cmd);
}

// this method is called when your extension is deactivated
export function deactivate() {}
