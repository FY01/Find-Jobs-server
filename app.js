/*
 * @Descripttion: 
 * @version: 
 * @@Company: 
 * @Author: FY01
 * @Date: 2018-04-26 20:09:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-02 11:29:44
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// 开启g-zip压缩
const compression = require("compression")
const cors = require("cors")

// 使用中间件处理
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置cors允许跨域
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404错误
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误回调
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染搓搓
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
