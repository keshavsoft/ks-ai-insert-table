import fixAnyJs from "express-fix-any-js";
import runCheck from "ks-ai-insert-table-check";
import { outputStructureJson as getOutputStructureJson } from "pattern-collector-base-files";

import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";

export default (toPath, tableName) => {
    const outputStructureJson = { ...getOutputStructureJson() };

    const checkResult = runCheck(toPath);

    if (checkResult && checkResult.KTF === false) {
        outputStructureJson.KTF = false;
        outputStructureJson.KReason = checkResult.KReason;
        outputStructureJson.lastOperation = checkResult;

        return outputStructureJson;
    };

    let fromRakaPoka;

    const fileType = "fromRoutesJsEnd";

    const alterArray = [
        { "key": "<TABLE_NAME>", "value": tableName }
    ];

    const source = getSourcePath({ inFileType: fileType });
    const destination = getDestinationPath(toPath, tableName);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        fromRakaPoka = fixAnyJs({
            inTargetPath: toPath, alterArray,
            inFileType: fileType,
            inValue: tableName, OutValue: tableName
        });
    };

    return {
        KTF: true,
        fromRakaPoka
    };
};