export default function FoodAndAmenitiesPage() {
  return (
    <main>
      <section id="amenities-header">
        <h2>Kitchen, Bar &amp; Club Amenities</h2>
        <p>
          Enjoy great food, cold drinks, and a vibrant atmosphere while you play. 
          Our full kitchen serves food late into the night, and our bar features cold domestic drafts, local craft beers, and seltzers.
        </p>
      </section>

      {/* SECTION 1: KITCHEN MENU CARDS */}
      <section id="kitchen-menu">
        <h2>Hot Kitchen Menu</h2>
        <p><em>Kitchen Open Daily from 12:00 PM until 30 minutes before closing.</em></p>

        <div className="grid-2">
          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: Jumbo Buffalo Wings &amp; Pub Starters ]</span>
            </div>
            <h3>Starters &amp; Finger Foods</h3>
            <ul>
              <li><strong>Jumbo Buffalo Wings (8 pc / 12 pc):</strong> $12.99 / $17.99</li>
              <li><strong>Crispy Mozzarella Sticks (6 pc):</strong> $8.99</li>
              <li><strong>Loaded Pub Fries or Tots:</strong> $9.99</li>
              <li><strong>Philly Cheesesteak Egg Rolls (3 pc):</strong> $10.99</li>
            </ul>
          </div>

          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: AC Classic Angus Burger &amp; Cheesesteak ]</span>
            </div>
            <h3>Handhelds &amp; Burgers</h3>
            <ul>
              <li><strong>AC Billiards Classic Burger:</strong> $13.99</li>
              <li><strong>South Jersey Philly Cheesesteak:</strong> $14.99</li>
              <li><strong>Grilled Chicken Sandwich:</strong> $13.49</li>
              <li><strong>Personal Stone-Baked Pizzas (10"):</strong> $11.99 – $14.49</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: DRAFT & BOTTLE BEER LIST */}
      <section id="bar-menu">
        <h2>Bar &amp; Beverage Selection</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Draft Beers on Tap</h3>
            <ul>
              <li><strong>Yuengling Traditional Lager</strong> (4.5% ABV)</li>
              <li><strong>Miller Lite</strong> (4.2% ABV)</li>
              <li><strong>Cape May IPA</strong> (Local NJ Craft – 6.3% ABV)</li>
              <li><strong>Guinness Draught Stout</strong> (4.2% ABV)</li>
              <li><strong>Stella Artois</strong> (5.0% ABV)</li>
            </ul>
          </div>

          <div className="card">
            <h3>Bottles, Cans &amp; Seltzers</h3>
            <ul>
              <li><strong>Domestics:</strong> Bud Light, Coors Light, Michelob Ultra, Corona, Heineken 0.0</li>
              <li><strong>Hard Seltzers:</strong> White Claw, High Noon Sun Sips</li>
              <li><strong>Non-Alcoholic:</strong> Red Bull, Fountain Sodas, Fresh Iced Tea</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: CLUB AMENITIES & PRO SHOP */}
      <section id="amenities-proshop">
        <h2>Club Amenities &amp; On-Site Pro Shop</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Pro Shop &amp; Cue Repairs</h3>
            <p>Fast tip replacements (Kamui, Tiger, Zan, Predator, Moori), ferrule repairs, shaft cleaning, Taom V10 chalk, and cue sales.</p>
          </div>

          <div className="card">
            <h3>TouchTunes Jukebox</h3>
            <p>Control background music directly from your phone with the TouchTunes app.</p>
          </div>

          <div className="card">
            <h3>Multi-Screen Sports TVs</h3>
            <p>Streaming NFL Sunday Ticket, MLB extra innings, combat sports, and Matchroom pool matches.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
