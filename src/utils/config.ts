import * as vscode from 'vscode';

/**
 * 获取剪贴板内容
 * @returns 剪贴板的内容
 */
export function getPaste() {
    return vscode.env.clipboard.readText();
}
