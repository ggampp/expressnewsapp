            {{#each articles}}
        	<div class="[ col-sm-12 col-md-4 col-lg-4 ]">
				<div class="[ info-card ]">
					<img style="width: 100%" src="{{urlToImage}}" />
					<div class="[ info-card-details ] animate">
						<div class="[ info-card-header ]">
							<h1> {{title}} </h1>
							<h3> {{author}} </h3>
						</div>
						<div class="[ info-card-detail ]">
							<p>{{description}}</p>
						</div>
					</div>
				</div>
			</div>
            {{/each}}
