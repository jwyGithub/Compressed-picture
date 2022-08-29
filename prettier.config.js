module.exports = {
    /**
     * @description 尾随逗号
     */
    trailingComma: 'none',

    /**
     * @description 箭头函数
     * @example avoid x => x
     * @example always (x) => x
     */
    arrowParens: 'avoid',

    /**
     * @description 代码最大长度 超过换行
     */
    printWidth: 150,

    /**
     * @description 缩进行数
     */
    tabWidth: 4,

    useTabs: false,

    /**
     * @description 在结尾增加分号
     */
    semi: true,

    /**
     * @description 使用单引号
     */
    singleQuote: true,

    quoteProps: 'as-needed',

    /**
     * @description 使用jsx
     */
    jsxSingleQuote: true,

    /**
     * @description 对象属性之间是否需要空格
     * @example true { foo: bar }
     * @example false {foo: bar}
     */
    bracketSpacing: true,

    /**
     * @description jsx语法中的开始标签是否换行显示
     */
    bracketSameLine: false,

    proseWrap: 'never',

    htmlWhitespaceSensitivity: 'css',

    /**
     * @description vue 文件 script 以及style标签是否缩进
     */
    vueIndentScriptAndStyle: false,

    endOfLine: 'crlf'
};
