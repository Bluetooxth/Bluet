package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {

	server := gin.Default()

	server.GET(("/"), func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello From Bluet",
		})
	})

	port := ":8080"
	if err := server.Run(port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
	fmt.Println("Server is running on port 8080")
}
