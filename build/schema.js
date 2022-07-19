"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.doodleArray = exports.doodle = void 0;
exports.doodle = {
    type: "object",
    properties: {
        name: { type: "string" },
        template: {
            type: "string",
            enum: [
                "doodle.html.template",
                "article.html.template"
            ],
        },
        fontWeight: { type: "string", enum: ["normal", "medium", "bold"], default: "medium" },
        fontSize: { type: "string", default: "80px" },
        title: { type: "string" },
        subtitle: { type: "string" },
        eyebrow: { type: "string" },
        logo: { type: "string" },
        background: { type: "string", default: "#fff" },
        doodle: { enum: ["strings", "timeTravel", "seeding"] },
        color: { type: "string", default: "#000" },
        includeWatermark: { type: "boolean", default: true },
        watermark: { type: "string" },
        size: { enum: [
                "facebook",
                "twitter"
            ], default: "twitter" },
        outputDir: { type: "string" },
    },
};
exports.doodleArray = {
    type: "array",
    items: exports.doodle,
};
exports.schema = {
    type: "object",
    properties: {
        project: { type: "string" },
        name: { type: "string" },
        rootDir: { type: "string" },
        concept: exports.doodleArray,
    },
    required: ["name"],
};
//# sourceMappingURL=schema.js.map