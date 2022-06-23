"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vendorRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _vendor = _interopRequireDefault(require("./vendor.controller"));

var _sanitizer = require("../../../middleware/sanitizer");

var _strategy = require("../../../middleware/strategy");

var _validator = require("../../../middleware/validator");

// import multer from 'multer';
// import path from 'path';
// var attachmentDir = path.join(path.dirname(require.main.filename), 'public', 'images','product')
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, attachmentDir)
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   })
// var uploadAttachment = multer({ storage: storage, limits:{ fileSize: 10485760 }})
var vendorRouter = _express["default"].Router(); // vendorRouter.route('/create').post(sanitize(),validateBody(schemas.vendorDetails),vendorController.index);


exports.vendorRouter = vendorRouter;
vendorRouter.route('/create').post((0, _sanitizer.sanitize)(), _strategy.jwtStrategy, _vendor["default"].index);
vendorRouter.route('/list').get((0, _sanitizer.sanitize)(), _strategy.jwtStrategy, _vendor["default"].getAllvendor);
vendorRouter.route('/product-list').get((0, _sanitizer.sanitize)(), _vendor["default"].getAllVendorProduct);
vendorRouter.route('/product/getAllProductById').post((0, _sanitizer.sanitize)(), _vendor["default"].getProductByVendor);
vendorRouter.route('/update').post((0, _sanitizer.sanitize)(), _vendor["default"].vendorUpdate);
vendorRouter.route('/delete')["delete"]((0, _sanitizer.sanitize)(), _vendor["default"].vendorDelete);
vendorRouter.route('/product-delete').post((0, _sanitizer.sanitize)(), _vendor["default"].vendorProductDelete);
vendorRouter.route('/product-add').post(_vendor["default"].vendorAddProduct);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3ZlbmRvci92ZW5kb3Iucm91dGVyLmpzIl0sIm5hbWVzIjpbInZlbmRvclJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJqd3RTdHJhdGVneSIsInZlbmRvckNvbnRyb2xsZXIiLCJpbmRleCIsImdldCIsImdldEFsbHZlbmRvciIsImdldEFsbFZlbmRvclByb2R1Y3QiLCJnZXRQcm9kdWN0QnlWZW5kb3IiLCJ2ZW5kb3JVcGRhdGUiLCJ2ZW5kb3JEZWxldGUiLCJ2ZW5kb3JQcm9kdWN0RGVsZXRlIiwidmVuZG9yQWRkUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsWUFBWSxHQUFHQyxvQkFBUUMsTUFBUixFQUFyQixDLENBQ1A7Ozs7QUFDQUYsWUFBWSxDQUFDRyxLQUFiLENBQW1CLFNBQW5CLEVBQThCQyxJQUE5QixDQUFtQywwQkFBbkMsRUFBOENDLHFCQUE5QyxFQUEyREMsbUJBQWlCQyxLQUE1RTtBQUNBUCxZQUFZLENBQUNHLEtBQWIsQ0FBbUIsT0FBbkIsRUFBNEJLLEdBQTVCLENBQWdDLDBCQUFoQyxFQUE0Q0gscUJBQTVDLEVBQTBEQyxtQkFBaUJHLFlBQTNFO0FBQ0FULFlBQVksQ0FBQ0csS0FBYixDQUFtQixlQUFuQixFQUFvQ0ssR0FBcEMsQ0FBd0MsMEJBQXhDLEVBQW1ERixtQkFBaUJJLG1CQUFwRTtBQUNBVixZQUFZLENBQUNHLEtBQWIsQ0FBbUIsNEJBQW5CLEVBQWlEQyxJQUFqRCxDQUFzRCwwQkFBdEQsRUFBaUVFLG1CQUFpQkssa0JBQWxGO0FBQ0FYLFlBQVksQ0FBQ0csS0FBYixDQUFtQixTQUFuQixFQUE4QkMsSUFBOUIsQ0FBbUMsMEJBQW5DLEVBQThDRSxtQkFBaUJNLFlBQS9EO0FBQ0FaLFlBQVksQ0FBQ0csS0FBYixDQUFtQixTQUFuQixZQUFxQywwQkFBckMsRUFBZ0RHLG1CQUFpQk8sWUFBakU7QUFDQWIsWUFBWSxDQUFDRyxLQUFiLENBQW1CLGlCQUFuQixFQUFzQ0MsSUFBdEMsQ0FBMkMsMEJBQTNDLEVBQXNERSxtQkFBaUJRLG1CQUF2RTtBQUNBZCxZQUFZLENBQUNHLEtBQWIsQ0FBbUIsY0FBbkIsRUFBbUNDLElBQW5DLENBQXdDRSxtQkFBaUJTLGdCQUF6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuLy8gaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdmVuZG9yQ29udHJvbGxlciBmcm9tICcuL3ZlbmRvci5jb250cm9sbGVyJztcbmltcG9ydCB7IHNhbml0aXplIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9zYW5pdGl6ZXInO1xuaW1wb3J0IHsgand0U3RyYXRlZ3kgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3N0cmF0ZWd5JztcbmltcG9ydCB7IHZhbGlkYXRlQm9keSwgc2NoZW1hcyB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdmFsaWRhdG9yJztcbi8vIHZhciBhdHRhY2htZW50RGlyID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpLCAncHVibGljJywgJ2ltYWdlcycsJ3Byb2R1Y3QnKVxuXG4vLyB2YXIgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XG4vLyAgICAgZGVzdGluYXRpb246IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4vLyAgICAgICBjYihudWxsLCBhdHRhY2htZW50RGlyKVxuLy8gICAgIH0sXG4vLyAgICAgZmlsZW5hbWU6IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4vLyAgICAgICBjYihudWxsLCBEYXRlLm5vdygpICsgcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKSlcbi8vICAgICB9XG4vLyAgIH0pXG4vLyB2YXIgdXBsb2FkQXR0YWNobWVudCA9IG11bHRlcih7IHN0b3JhZ2U6IHN0b3JhZ2UsIGxpbWl0czp7IGZpbGVTaXplOiAxMDQ4NTc2MCB9fSlcblxuXG5leHBvcnQgY29uc3QgdmVuZG9yUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbi8vIHZlbmRvclJvdXRlci5yb3V0ZSgnL2NyZWF0ZScpLnBvc3Qoc2FuaXRpemUoKSx2YWxpZGF0ZUJvZHkoc2NoZW1hcy52ZW5kb3JEZXRhaWxzKSx2ZW5kb3JDb250cm9sbGVyLmluZGV4KTtcbnZlbmRvclJvdXRlci5yb3V0ZSgnL2NyZWF0ZScpLnBvc3Qoc2FuaXRpemUoKSxqd3RTdHJhdGVneSwgdmVuZG9yQ29udHJvbGxlci5pbmRleCk7XG52ZW5kb3JSb3V0ZXIucm91dGUoJy9saXN0JykuZ2V0KHNhbml0aXplKCksIGp3dFN0cmF0ZWd5ICwgdmVuZG9yQ29udHJvbGxlci5nZXRBbGx2ZW5kb3IpO1xudmVuZG9yUm91dGVyLnJvdXRlKCcvcHJvZHVjdC1saXN0JykuZ2V0KHNhbml0aXplKCksdmVuZG9yQ29udHJvbGxlci5nZXRBbGxWZW5kb3JQcm9kdWN0KTtcbnZlbmRvclJvdXRlci5yb3V0ZSgnL3Byb2R1Y3QvZ2V0QWxsUHJvZHVjdEJ5SWQnKS5wb3N0KHNhbml0aXplKCksdmVuZG9yQ29udHJvbGxlci5nZXRQcm9kdWN0QnlWZW5kb3IpO1xudmVuZG9yUm91dGVyLnJvdXRlKCcvdXBkYXRlJykucG9zdChzYW5pdGl6ZSgpLHZlbmRvckNvbnRyb2xsZXIudmVuZG9yVXBkYXRlKTtcbnZlbmRvclJvdXRlci5yb3V0ZSgnL2RlbGV0ZScpLmRlbGV0ZShzYW5pdGl6ZSgpLHZlbmRvckNvbnRyb2xsZXIudmVuZG9yRGVsZXRlKTtcbnZlbmRvclJvdXRlci5yb3V0ZSgnL3Byb2R1Y3QtZGVsZXRlJykucG9zdChzYW5pdGl6ZSgpLHZlbmRvckNvbnRyb2xsZXIudmVuZG9yUHJvZHVjdERlbGV0ZSk7XG52ZW5kb3JSb3V0ZXIucm91dGUoJy9wcm9kdWN0LWFkZCcpLnBvc3QodmVuZG9yQ29udHJvbGxlci52ZW5kb3JBZGRQcm9kdWN0KTtcblxuXG5cblxuXG5cblxuIl19