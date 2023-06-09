import { DataTypes } from 'sequelize'
import { sequelize } from '../../mysql/index.js'

export default sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "主键"
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "书名"
    },
    subTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "副标题",
        field: 'sub_title'
    },
    foreignTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "外文名",
        field: 'foreign_title'
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "关联作者Id",
        field: 'author_id'
    },
    cover: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "封面"
    },
    tags: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "标签（关联ids）"
    },
    introduction: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "简介"
    },
    publishTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "出版时间",
        field: 'publish_time'
    }
})
