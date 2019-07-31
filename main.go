//go:generate statik -src=./test
package main

import (
	"log"
	"net/http"

	_ "github.com/ddosakura/light-ci/statik"
	"github.com/rakyll/statik/fs"

	"github.com/labstack/echo"
)

func main() {
	statikFS, err := fs.New()
	if err != nil {
		log.Fatal(err)
	}

	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		http.FileServer(statikFS).ServeHTTP(c.Response().Writer, c.Request())
		return nil
	})
	e.GET("/notice", notice)
	e.Logger.Fatal(e.Start(":1323"))
}
