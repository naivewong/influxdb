package tsm1

import (
	"fmt"
	"testing"

	"github.com/influxdata/influxdb/models"
	"github.com/influxdata/influxdb/tsdb"
)

func TestCollectionToValues(t *testing.T) {
	line := `cpu,region=us-west,host=serverA alec1=1i,alec2=22i 1000000000`
	pt, _ := models.ParsePoints([]byte(line), []byte("mm"))
	fmt.Println("num of points", len(pt))
	for _, p := range pt {
		fmt.Println("point key", string(p.Key()))
	}
	sc := tsdb.NewSeriesCollection(pt)
	sc.SeriesKeys = tsdb.GenerateSeriesKeys(sc.Names, sc.Tags)
	it := sc.Iterator()
	for it.Next() {
		fmt.Println("sc key", string(it.Key()), "sc series key", string(it.SeriesKey()))
	}
	vals, _ := CollectionToValues(sc)
	for key, _ := range vals {
		fmt.Println("key", key)
	}
}