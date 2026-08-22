import pg from "pg"
const { Pool } = pg

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_8GtXLKnZFo2R@ep-wandering-river-aua9obb6.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

async function seed() {
  console.log("Ensuring table...")
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      meta_title TEXT NOT NULL DEFAULT '',
      meta_description TEXT NOT NULL DEFAULT '',
      meta_keywords TEXT NOT NULL DEFAULT '',
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL DEFAULT 'Panoramic Hotel',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_title TEXT NOT NULL DEFAULT '';
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_description TEXT NOT NULL DEFAULT '';
    ALTER TABLE blogs ADD COLUMN IF NOT EXISTS meta_keywords TEXT NOT NULL DEFAULT '';
  `)

  const title = "Top Tourist Attractions Near Mall Road Lahore"
  const slug = "top-tourist-attractions-near-mall-road-lahore"
  const metaTitle = "Top Tourist Attractions Near Mall Road Lahore | Travel Guide"
  const metaDescription =
    "Discover the top tourist attractions near Mall Road Lahore, including Lahore Fort, Badshahi Mosque, Anarkali Bazaar, and more. Stay close to the city's best attractions at the Panoramic Hotel."
  const metaKeywords =
    "Top Tourist Attractions Near Mall Road Lahore, Attractions Near Mall Road Lahore, Tourist Attractions Near Mall Road Lahore, Places to visit near Mall Road Lahore, Lahore Fort, Badshahi Mosque, Anarkali Bazaar, Minar-e-Pakistan, Lahore Museum, Food Street Lahore, Lahore Zoo, Shalimar Gardens, Panoramic Hotel Lahore"
  const excerpt =
    "Discover the top tourist attractions near Mall Road Lahore, including Lahore Fort, Badshahi Mosque, Anarkali Bazaar, and more. Stay close to the city's best attractions at the Panoramic Hotel."
  const author = "Panoramic Hotel"
  const content = `Lahore is known as the cultural heart of Pakistan, offering a perfect blend of history, architecture, shopping, and delicious food. If you're planning a visit, exploring the Top Tourist Attractions Near Mall Road Lahore is one of the best ways to experience the city's rich heritage. Staying near Mall Road allows you to reach Lahore's famous landmarks within minutes while enjoying a comfortable and convenient stay.

## Why Stay Near Mall Road Lahore?

Mall Road is one of Lahore's most central locations. It connects visitors to historical sites, shopping areas, museums, restaurants, and business districts. Whether you're traveling with family, friends, or for business, staying near Mall Road makes sightseeing easy and saves valuable travel time.

### 1. Lahore Fort

The magnificent Lahore Fort is one of Pakistan's most famous historical landmarks and a UNESCO World Heritage Site. Visitors can admire its beautiful Mughal architecture, royal halls, museums, and stunning gardens.

### 2. Badshahi Mosque

Located just a short drive from Mall Road, the Badshahi Mosque is one of the largest and most beautiful mosques in the world. Its impressive red sandstone architecture attracts thousands of local and international tourists every year.

### 3. Minar-e-Pakistan

Minar-e-Pakistan is a national monument that marks the historic Lahore Resolution of 1940. The surrounding park offers a peaceful environment where families can relax and enjoy beautiful views.

### 4. Lahore Museum

If you're interested in history and culture, Lahore Museum is a must-visit destination. It houses an extensive collection of ancient artifacts, manuscripts, paintings, and historical exhibits.

### 5. Anarkali Bazaar

Anarkali Bazaar is one of the oldest markets in South Asia. Visitors can shop for traditional clothing, handmade crafts, jewelry, souvenirs, and delicious local street food.

### 6. Food Street Lahore

Food Street is a paradise for food lovers. Here you can enjoy authentic Pakistani cuisine, traditional BBQ, desserts, and local specialties while experiencing the vibrant atmosphere of old Lahore.

### 7. Lahore Zoo

Lahore Zoo is one of the oldest zoos in the country and a popular attraction for families with children. It features a wide variety of animals and offers a fun day out for visitors of all ages.

### 8. Shalimar Gardens

The beautiful Shalimar Gardens are another UNESCO World Heritage Site. Built during the Mughal era, these gardens are famous for their fountains, lush greenery, and peaceful surroundings.

## Best Time to Explore Lahore

The ideal time to visit Lahore is from October to March when the weather is pleasant for sightseeing. Early mornings and evenings are perfect for visiting outdoor attractions and enjoying the city's vibrant atmosphere.

## Stay Close to Lahore's Top Attractions

Choosing accommodation near Mall Road means you can easily visit all these famous destinations without long travel times. [Panoramic Hotel](https://www.panoramichotel.co/) offers comfortable rooms, free Wi-Fi, free parking, a restaurant, CCTV security, and a 24/7 front desk, making it an excellent choice for tourists visiting Lahore.

## Conclusion

The Top Tourist Attractions Near Mall Road Lahore offer something for every traveler, from historical landmarks and cultural sites to shopping markets and family-friendly destinations. By staying near Mall Road, you can explore the best of Lahore conveniently while enjoying a comfortable stay at [Panoramic Hotel](https://www.panoramichotel.co/).

## Frequently Asked Questions

### Q1. Which tourist attractions are closest to Mall Road Lahore?

Lahore Fort, Badshahi Mosque, Lahore Museum, Anarkali Bazaar, Food Street, Minar-e-Pakistan, Lahore Zoo, and Shalimar Gardens.

### Q2. Is Mall Road a good area for tourists?

Yes. Mall Road is centrally located and provides easy access to Lahore's major attractions, shopping areas, and restaurants.

### Q3. Which hotel is a good choice near Mall Road Lahore?

Panoramic Hotel offers comfortable accommodation with modern amenities and easy access to Lahore's top tourist attractions.`

  const checkRes = await pool.query("SELECT id FROM blogs WHERE slug = $1", [slug])
  if (checkRes.rows.length > 0) {
    console.log("Updating existing blog in DB...")
    await pool.query(
      `UPDATE blogs SET title=$1, meta_title=$2, meta_description=$3, meta_keywords=$4, excerpt=$5, content=$6, author=$7 WHERE slug=$8`,
      [title, metaTitle, metaDescription, metaKeywords, excerpt, content, author, slug]
    )
  } else {
    console.log("Inserting new blog in DB...")
    await pool.query(
      `INSERT INTO blogs (title, slug, meta_title, meta_description, meta_keywords, excerpt, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [title, slug, metaTitle, metaDescription, metaKeywords, excerpt, content, author]
    )
  }

  console.log("Successfully seeded database!")
  await pool.end()
}

seed().catch((err) => {
  console.error("Error seeding DB:", err)
  process.exit(1)
})
