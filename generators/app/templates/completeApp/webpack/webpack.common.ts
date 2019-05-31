import { resolve } from "path";
import { Configuration } from "webpack";
<%if (styles === 'css' || styles === 'sass') { %>
import miniCSS from "mini-css-extract-plugin";

import { extractText } from "./plugins/css";
<% } %>
import { htmlInject } from "./plugins/html";

const config: Configuration = {
  entry: {
    "<%= name %>": resolve(__dirname, "../src/index.tsx")
  },
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      
			},
			<%if (styles === 'css' || styles === 'sass') { %>
				{
					test: /\.s?css/,
					use: [
						process.env.NODE_ENV === "development"
            ? "style-loader"
            : miniCSS.loader,
						"css-loader",
						<%if (styles === 'sass') { %>
							"sass-loader",
							<%}%>
					]
				},
				<% } %>
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            fallback: "file-loader",
            name: "assets/[name].[hash].[ext]"
          }
        }
      },
      {
        test: /\.(woff2|woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            fallback: "file-loader",
            name: "assets/[name].[hash].[ext]"
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            fallback: "file-loader",
            name: "assets/[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  plugins: [
    <%if (styles === 'css' || styles === 'sass') { %>
    extractText,
    <% } %>
    htmlInject,
    ]
};

export default config;
